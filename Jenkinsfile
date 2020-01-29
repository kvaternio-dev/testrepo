def processTestResults = { id ->
    sh "mv ggb/cypress/videos videos-${id}"
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
        stage('Test') {
            steps {
                echo 'Testing..'
            }
            post { always { script { processTestResults('test') } } }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
            post { always { script { processTestResults('deploy') } } }
        }
    }
}
