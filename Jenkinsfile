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
                sh "npm install"
                sh "wget ${snapshotsUrl} test/cypress/temp || true"
                sh "npx cypress run -P test"
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
