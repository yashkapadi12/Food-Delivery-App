
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
          sh 'npm install --legacy-peer-deps'
        }
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        dir("${BACKEND_DIR}") {
          sh 'npm install --force'
        }
      }
    }

    stage('Run Frontend Tests') {
      steps {
        dir("${FRONTEND_DIR}") {
          // Replace with actual test command
          sh 'npm start'
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir("${BACKEND_DIR}") {
          // Replace with actual test command
          sh 'node index.js'
        }
      }
    }

    // stage('Build Frontend') {
    //   steps {
    //     dir("${FRONTEND_DIR}") {
    //       sh 'npm run build'
    //     }
    //   }
    // }

    // stage('Start Backend (Dev)') {
    //   steps {
    //     dir("${BACKEND_DIR}") {
    //       sh 'node index.js'
    //     }
    //   }
    // }

    
  }

  
}
