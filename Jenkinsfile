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
            sh '''${scannerHome}/bin/sonar-scanner
              -Dsonar.projectKey=plantmanager'''
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
} https://53d7-2804-29b8-515b-90f6-d4c5-4fc5-c065-6b61.ngrok-free.app