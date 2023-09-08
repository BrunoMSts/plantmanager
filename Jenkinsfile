pipeline {
  agent any

  tools {
    nodejs "node"
  }

  stages  {
    stage ("Inicial") {
      steps {
        echo "Iniciando a Pipe"
      }
    }
    stage ("Limpar workspace") {
      steps {
        echo "Limpando workspace ..."
        deleteDir()
      }
    }
    stage('Install Npm Dependencies') {
      steps {
        sh 'npm install'
        sh 'yarn install'
      }
    }
    

    // stage('Criar outlier') {
    //   steps {
    //     script {
    //       def sleepTime = 15 * 60 * 1000
    //       echo "Esperando 15 minutos"

    //       sleep time: sleepTime, unit: 'MILLISECONDS'
    //     }
    //   }
    // }

    stage('SonarQube Analysis') {
      steps {        
        script {
          def scannerHome = tool 'sonarqube-scanner';
          withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }

    stage ("Dependency check") {
      steps {
        echo "Escaneando"
        echo "Gerando relatórios"
        dependencyCheck additionalArguments: '--scan . --format HTML --format JSON --exclude "node_modules/**"', odcInstallation: 'intellibot-dp-check'
      }
    }
  }
}