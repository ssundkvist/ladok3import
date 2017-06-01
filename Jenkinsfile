pipeline {
  agent any
  stages {
    stage('Check if package.json changed') {
       bat "echo 'HEJ'"
    }
    stage('Build node_modules') {
      when {
        environment name: 'Rebuild', value: '1'
      }
      steps {
        bat "${tool 'NodeJS65'}\\npm install"
      }
    }
  }
}
