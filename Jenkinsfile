// Install node 6.5 as global tool in Jenkins with global npm package "node-gyp" and "windows-build-tools"
//  npm config set msvs_version 2015 --global
//  npm install npm@latest -g
pipeline {
  agent any
  stages {
    stage('Show path') {
      steps {
        bat "${tool 'NodeJS65'}\\npm install"
      }
    }
  }
}
