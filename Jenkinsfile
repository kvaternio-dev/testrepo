def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
    sh "mv test/cypress/snapshots snapshots-${id}"
    archiveArtifacts "snapshots-${id}/**"
    sh "rm -rf snapshots-${id}"
    sh "rm -rf videos-${id}"
}

def getReferenceImagesFromArchive = { id ->
    step ([$class: 'CopyArtifact',
        projectName: 'CypressPipeline',
        selector: specific('34'),
        filter: 'snapshots-${id}/snapshots/**']);
    sh "mv snapshots-${id}/snapshots test/cypress/"
    sh "rm -rf snapshots-${id}"
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
            post { always { script { processTestResults('build') } } }
        }
    }
}
