def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
}

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
