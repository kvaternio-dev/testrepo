def processTestResults = { id ->
    sh "mv test/cypress/videos videos-${id}"
    archiveArtifacts "videos-${id}/**"
    sh "mv test/cypress/snapshots snapshots-${id}"
    archiveArtifacts "snapshots-${id}/**"
}

def getReferenceImages = { id ->
    step ([$class: 'CopyArtifact',
    projectName: 'CypressPipeline',
    filter: 'snapshots-build/snapshots/**',
    target: 'copyTarget4']);
}

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "${env.JENKINS_URL}"
                sh "npm install"
                script { getReferenceImages('build') }
                sh "mv copyTarget4/snapshots-build/snapshots test/cypress/"
                sh "npx cypress run -P test"
            }
            post { always { script { processTestResults('build') } } }
        }
    }
}
