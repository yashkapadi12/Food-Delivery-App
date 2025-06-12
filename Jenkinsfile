pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build and Start Services') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose build'
        sh 'docker-compose up -d'
      }
    }

    stage('Verify') {
      steps {
        sh 'docker ps'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up containers...'
      sh 'docker-compose down'
    }
  }
}
