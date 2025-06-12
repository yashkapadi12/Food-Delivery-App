pipeline {
  agent any

  environment {
    FRONTEND_DIR = 'fronted'
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
          sh 'npm start --force'
        }
      }
    }
  }
}
