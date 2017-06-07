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
        environment name: 'Rebuild', value: '1'
      }
      steps {
        bat "${tool 'NodeJS65'}\\npm install"
      }
    }
    stage('Push to Azure') {
      steps {
        withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: '2c2b4395-2c37-4890-855b-8042337708f8', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD']]) {
          sh("git tag -a some_tag -m 'Jenkins'")
          sh('git push https://${GIT_USERNAME}:${GIT_PASSWORD}@sstladok3.scm.azurewebsites.net:443/sstladok3.git')
          }
        }
    }
  }
}
