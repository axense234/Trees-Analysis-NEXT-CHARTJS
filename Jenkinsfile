pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        git(url: 'https://github.com/axense234/Trees-Analysis-NEXT-CHARTJS', branch: 'main')
      }
    }

    stage('NPM Test') {
      steps {
        sh 'npm --version'
      }
    }

    stage('AWS ECR Login') {
      steps {
        sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/g6t2k7y6'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t trees-analysis-next .'
      }
    }

    stage('AWS ECR Push') {
      steps {
        sh 'docker tag trees-analysis-next:latest public.ecr.aws/g6t2k7y6/trees-analysis-next:latest'
        sh 'docker push public.ecr.aws/g6t2k7y6/trees-analysis-next:latest'
      }
    }

  }
}