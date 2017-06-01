pipeline {
  agent any
  stages {
    stage('Build node_modules') {
      steps {
        bat '"${tool \'NodeJS65\'}\\npm install"'
      }
    }
  }
}