pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Amnaaaaaaaaaaaa/Calculator-API.git' 
            }
        }

        stage('Install Dependencies and Run Tests') {
            steps {
                bat 'npm install'
                bat 'npm run lint'
                bat 'npm test'
            }
        }

        stage('Archive Artifacts') {
            steps {
                bat 'zip -r build.zip dist'
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
