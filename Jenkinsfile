pipeline {
  agent any

  stages  {
    stage ("Inicial") {
      steps {
        echo "Iniciando a Pipe"
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'yarn install'
      }
    }


    stage('SonarQube Analysis') {
      steps {        
        script {
          def scannerHome = tool 'sonarqube-scanner';
          withSonarQubeEnv() {
            sh "npm install sonar-scanner"
            sh "npm run sonar"
            // sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }

    // stage ("Dependency check") {
    //   steps {
    //     echo "Escaneando"
    //     echo "Gerando relatórios"
    //     dependencyCheck additionalArguments: '--scan . --format HTML --format JSON --exclude "node_modules/**"', odcInstallation: 'intellibot-dp-check'
    //   }
    // }
  }
}