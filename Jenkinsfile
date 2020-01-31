def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
    sh "mv test/cypress/snapshots snapshots-${id}"
    archiveArtifacts "snapshots-${id}/**"
}

def snapshotsUrl = "http://localhost:8080/job/CypressPipeline/lastSuccessfulBuild/artifact/videos-build/"

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                   npm install
                   wget ${snapshotsUrl} test/cypress/temp
                   npx cypress run -P test
                   '''
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
