def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
}

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                   npm install
                   npx cypress run -P test
                   '''
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
