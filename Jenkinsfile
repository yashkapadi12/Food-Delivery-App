pipeline {
  agent any

  environment {
    FRONTEND_DIR = '/home/web-h-010/Documents/Food-Delivery-App/fronted'
    BACKEND_DIR = '/home/web-h-010/Documents/Food-Delivery-App/backend'
  }

  stages {
    stage('Install Frontend Dependencies') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm install --legacy-peer-deps || npm install --force'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm run build'
        }
      }
    }
  }
}
