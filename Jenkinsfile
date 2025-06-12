pipeline {
  agent any

  environment {
    FRONTEND_DIR = 'fronted'
    BACKEND_DIR = 'backend'
    CI = 'false' // Prevent React from failing on warnings
  }

  stages {
    stage('Install Frontend Dependencies') {
      steps {
        dir("${FRONTEND_DIR}") {
          sh '''
            npm install --legacy-peer-deps || npm install --force
          '''
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
          // Build instead of start in CI; use start only to run the dev server
          sh 'npm  build'
        }
      }
    }

    stage('Start Backend') {
      steps {
        dir("${BACKEND_DIR}") {
          // Optional: You might want to use pm2 or nohup here if keeping it alive
          sh 'node  index.js'
        }
      }
    }
  }
}
