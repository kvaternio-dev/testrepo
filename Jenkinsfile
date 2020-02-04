def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
    sh "mv test/cypress/snapshots snapshots-${id}"
    archiveArtifacts "snapshots-${id}/**"
}

def snapshotsUrl = "http://192.168.0.14:8080/job/CypressPipeline/lastSuccessfulBuild/artifact/snapshots-build/"

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "${env.JENKINS_URL}"
                sh "npm install"
                script{
                    step ([$class: 'CopyArtifact',
                    projectName: 'CypressPipeline',
                    filter: 'snapshots-build/**',
                    target: 'copyTarget1']);
                }
                script{
                    step ([$class: 'CopyArtifact',
                    projectName: 'CypressPipeline',
                    filter: 'snapshots-build/*.*',
                    target: 'copyTarget2']);
                }
                script{
                    step ([$class: 'CopyArtifact',
                    projectName: 'CypressPipeline',
                    filter: 'snapshots-build/*.png',
                    target: 'copyTarget3']);
                }
                sh "wget ${snapshotsUrl} test/cypress/temp || true"
                sh "npx cypress run -P test"
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
