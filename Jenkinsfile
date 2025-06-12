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
        sh 'docker compose up -d'
      }
    }
  }
   
