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
         
          sh 'npm install --legacy-peer-deps && npm install --force'
    
      }
    }

    stage('Build Frontend') {
      steps {
      
          sh 'npm run build'
        
      }
    }
  }
}
