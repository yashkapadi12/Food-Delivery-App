pipeline {
  agent any

  environment {
    FRONTEND_DIR = '/home/web-h-010/Documents/Food-Delivery-App/fronted'
    BACKEND_DIR = '/home/web-h-010/Documents/Food-Delivery-App/backend'
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/yashkapadi12/Food-Delivery-App.git', branch: 'main'
      }
    }

    stage('Install Frontend Dependencies') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'npm install --legacy-peer-deps'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'npm run build'
        }
      }
    }
  }
}