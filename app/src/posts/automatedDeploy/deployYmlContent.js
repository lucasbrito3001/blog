export default `# nome do workflow
name: Deploy automatizado

# quando e onde aplicá-lo - quando houver push na branch develop
on: 
  push:
    branches: [ develop ]

# serviços executados
jobs:
  deploy-front:
    name: deploy front-end - vite react
    runs-on: ubuntu-latest
    # ações executadas no serviço
    steps:
    - name: Conectar no servidor VPS via SSH
      uses: appleboy/ssh-action@v0.1.3
      with:
        host: \${{ secrets.HOST }}
        port: \${{ secrets.PORT }}
        username: \${{ secrets.USER }}
        key: \${{ secrets.SSH_KEY }}
        # scripts / comandos que serão executados dentro do seu servidor
        script: |
          export NVM_DIR=~/.nvm
          source ~/.nvm/nvm.sh
          cd {diretorio_repositorio}  # ir para a pasta onde está o código
          git checkout develop  # mudar para a branch develop
          git pull origin develop  # puxar as alterações do repositório remoto
          yarn  # instalar dependências
          yarn build  # buildar o projeto
          cp -r dist/. {diretorio_site}  # copiar conteúdo gerado no build para dentro da pasta do site
          systemctl reload apache2  # reiniciar o servidor web utilizado`