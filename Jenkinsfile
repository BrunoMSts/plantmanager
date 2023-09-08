pipeline {
  agent any

  tools {
    nodejs "node"
  }
  aaa
  stages  {
    stage ("Inicial") {
      steps {
        echo "Iniciando a Pipe"
      }
    }
    // stage ("Limpar workspace") {
    //   steps {
    //     echo "Limpando workspace ..."
    //     deleteDir()
    //   }
    // }
    stage('Install Npm Dependencies') {
      steps {
        sh 'npm install'
        sh 'yarn install'
      }
    }
  
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
        dependencyCheck additionalArguments: '--scan package-lock.json --format HTML --format JSON', odcInstallation: 'intellibot-dp-check'
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

  }
}