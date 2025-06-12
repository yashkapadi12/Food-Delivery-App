pipeline {
  agent any

  environment {
    FRONTEND_DIR = 'fronted'
    BACKEND_DIR = 'backend'
    CI = 'false' // Prevent React from treating warnings as errors
  }

  stages {
    stage('Install Frontend Dependencies') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npm install --legacy-peer-deps || npm install --force'
        }
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'npm install'
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

    stage('Serve Frontend') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh 'npx serve -s build &'
        }
      }
    }

    stage('Start Backend') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'node index.js &'
        }
      }
    }
  }
}
