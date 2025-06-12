pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = "mern_app"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build and Start Services') {
      steps {
        sh 'docker compose up -d --build'
      }
    }

    stage('Verify') {
      steps {
        sh 'docker compose ps'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up containers...'
      sh 'docker compose down'
    }
  }
}
