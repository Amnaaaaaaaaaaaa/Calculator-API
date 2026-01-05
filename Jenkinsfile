pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'github.com' 
            }
        }

        stage('Install Dependencies and Run Tests') {
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm test'
            }
        }

        stage('Archive Artifacts') {
            steps {
                sh 'zip -r build.zip dist'
                archiveArtifacts artifacts: 'build.zip', onlyIfSuccessful: true 
            }
        }
    }

    post {
        success {
            echo "Email sent to team@example.com: Build successful!"
        }
        failure {
            echo "Email sent to team@example.com: Build failed!"
        }
    }
}
