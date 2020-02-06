def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
    sh "mv test/cypress/snapshots snapshots-${id}"
    archiveArtifacts "snapshots-${id}/**"
}

def getReferenceImagesFromArchive = { id ->
    step ([$class: 'CopyArtifact',
    projectName: 'CypressPipeline',
    filter: 'snapshots-build/snapshots/**',
    target: '.']);
    sh "mv snapshots-build/snapshots test/cypress/"
    sh "rm -rf snaphots-build"
}

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "${env.JENKINS_URL}"
                sh "npm install"
                script { getReferenceImagesFromArchive('build') }
                sh "npx cypress run -P test"
            }
            // post { always { script { processTestResults('build') } } }
        }
    }
}
