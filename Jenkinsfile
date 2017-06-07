#!groovy
@Library('psh@master') _

pipeline {
  agent any
  stages {
    stage('Check if package.json changed') {
      steps {
        psh "echo 'HEJ'"
      }
    }
    stage('Build node_modules') {
      when {
        environment name: 'Rebuild', value: '0'
      }
      steps {
        bat "echo rebuilding..."
        bat "${tool 'NodeJS65'}\\npm install --scripts-prepend-node-path"
      }
    }
    stage('Push to Azure') {
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: '2c2b4395-2c37-4890-855b-8042337708f8', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD']]) {
          bat '''
                git status
                git push "https://%GIT_USERNAME%:%GIT_PASSWORD%@sstladok3.scm.azurewebsites.net:443/sstladok3.git" master
              '''
          }
        }
    }
  }
}
