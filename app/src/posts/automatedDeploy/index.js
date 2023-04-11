import GenerateSSHKey from "./generateSSHKey"
import ConcatenatePubKey from "./concatenatePubKey"
import ReadSSHPrivateKey from "./readSSHPrivateKey"
import DeployYml from "./deployYmlContent"
import PushDiffsToRepo from "./pushDiffsToRepo"

import SecretsGithub from "./assets/secrets-github-repo.png"
import Workflows from "./assets/workflows.png"
import Jobs from "./assets/jobs.png"

const AUTOMATED_DEPLOY = {
    title: "Como automatizar deploy em um VPS com GitHub Actions",
    createdAt: "2023/04/06",
    categories: [{ value: 'devops', text: "DevOps" }],
    subtitle: "Configurando o GitHub Actions para acessar seu VPS via SSH e rodar scripts para automatizar seu deploy.",
    introduction: "O processo de deploy manual pode ser uma tarefa longa e cansativa, dito isso, a automatização desse processo é uma tarefa muito interessante, principalmente em ambientes de desenvolvimento, onde várias vezes o tempo é um recurso escasso. Nesse artigo, vamos ver como acessar um servidor VPS via SSH com o GitHub Actions e mostrar um exemplo automatizando o deploy de uma aplicação ReactJs buildada pelo vite. Vale ressaltar que o processo é o mesmo para qualquer linguagem / projeto, mudando somente o processo realizado depois que já tenha acessado a sua máquina.",
    sections: [
        {
            title: "Benefícios",
            content: [
                {
                    type: "text",
                    value: "Alguns dos benefícios da automatização do processo de deployment são:"
                },
                {
                    type: 'uList',
                    items: [
                        "Mais tempo para os desenvolvedores focarem nas tarefas.",
                        "Evitar erros humanos durante o processo.",
                        "Publicação constante de novas features e solução de issues / bugs, possibilitando testes menores e mais frequentes."
                    ]
                }
            ]
        },
        {
            title: "Criando a chave SSH",
            content: [
                {
                    type: "text",
                    value: "Primeiro, é necessário criar uma nova chave SSH que utilizaremos para acessar a nossa VPS. Sendo assim o primeiro passo então é acessar o servidor e dentro dele rodar o seguinte script, subtituindo o <code class='text-code'>your_email@example.com</code> pelo seu email utilizado para fazer login no GitHub."
                },
                {
                    type: "code",
                    value: GenerateSSHKey,
                    lang: "bash"
                },
                {
                    type: "text",
                    value: "Após fazer isso, irá aparecer algumas perguntas no console, a primeira é para você definir um nome específico para o seu arquivo da chave, por padrão será <code class='text-code'>id_ed25519</code>, caso você já tenha uma chave que já utiliza, com o mesmo nome, adicione algum nome diferente, caso contrário é só apertar enter. Para as outras duas opções pode apertar enter sem adicionar nada."
                },
                {
                    type: "text",
                    value: "Isso vai gerar duas chaves, uma privada e uma pública com nomes <code class='text-code'>id_ed25519</code> e <code class='text-code'>id_ed25519.pub</code> respectivamente, temos que adicionar a chave pública como uma chave autorizada no nosso servidor, para isso usamos o seguinte comando:"
                },
                {
                    type: "code",
                    value: ConcatenatePubKey,
                    lang: "bash"
                },
                {
                    type: "text",
                    value: "O comando concatena o conteúdo do arquivo <code class='text-code'>id_ed25519.pub</code> no arquivo authorized_keys caso ele exista, caso não, ele será criado primeiro e depois concatenado."
                },
                {
                    type: "text",
                    value: "O próximo passo é configurar as credenciais de acesso da nossa máquina remota no repositório do GitHub que iremos automatizar. Para isso precisaremos do conteúdo da chave privada que criamos, execute o comando a seguir e copie o conteúdo que será retornado no terminal."
                },
                {
                    type: "code",
                    value: ReadSSHPrivateKey
                }
            ]
        },
        {
            title: "Configurando credenciais de acesso no repositório",
            content: [
                {
                    type: "text",
                    value: "Precisamos de 4 variáveis que utilizaremos para acessar a máquina via SSH, são elas:"
                },
                {
                    type: "uList",
                    items: [
                        "SSH_KEY - conteúdo da chave privada copiada acima",
                        "PORT - 22 (ou a porta SSH configurada no seu VPS)",
                        "USER - usuário existente na máquina utilizado para acesso SSH",
                        "HOST - endereço IP do servidor"
                    ]
                },
                {
                    type: "text",
                    value: "Para criar essas variáveis você deverá acessar o seu repositório, e ir em <code class='text-code'>Settings > Secrets and variables > Actions > New repository secret</code> e adicionar uma a uma."
                },
                {
                    type: "image",
                    src: SecretsGithub
                }
            ]
        },
        {
            title: "Configurando o GitHub Actions",
            content: [
                {
                    type: "text",
                    value: "Vamos então para a última parte do tutorial, criar a configuração do GitHub Actions. Primeiro, assumindo que você tenha o repositório clonado na sua máquina, crie na raiz do seu projeto a pasta .github/workflows e dentro dela o arquivo deploy.yml e insira o seguinte conteúdo nele:"
                },
                {
                    type: "code",
                    value: DeployYml,
                    lang: 'yml'
                },
                {
                    type: "text",
                    value: "No exemplo acima, temos duas variáveis na parte do script, sendo elas <code class='text-code'>{diretorio_repositorio}</code> e <code class='text-code'>{diretorio_site}</code>, você deve substituí-las pelo diretório onde você clonou o seu repositório e o diretório onde você deixa o conteúdo buildado do seu site, normalmente é algo parecido com <code class='text-code'>/var/app/{nome_projeto}</code> e <code class='text-code'>/var/www/{dominio_site}/public_html</code>, respectivamente."
                }
            ]
        },
        {
            title: "Hora da verdade",
            content: [
                {
                    type: "text",
                    value: "Chegou a hora de testar, então vamos enviar as nossas configurações pra dentro do repositório remoto e ver como o GitHub vai lidar com isso."
                },
                {
                    type: "code",
                    value: PushDiffsToRepo,
                    lang: "git"
                },
                {
                    type: "text",
                    value: "Para ver a execução do workflow do GitHub Actions você deve acessar o repositório ir no menu Actions e entrar no primeiro item da lista."
                },
                {
                    type: "image",
                    src: Workflows
                },
                {
                    type: "image",
                    src: Jobs
                },
                {
                    type: "text",
                    value: "E aí está, se estiver tudo verdinho como nas imagens acima, significa que o seu deploy automático foi configurado com sucesso, e agora toda vez que você houver um push de código na branch develop essa ação será executada e seu código será auto-implementado no seu servidor"
                }
            ]
        },
        {
            title: "Observações",
            content: [
                {
                    type: "text",
                    value: "Caso você tenha optado por acessar sua máquina via SSH sem usar o usuário root, precisará dar algumas permissões para o seu usuário criar pastas, rodar alguns comandos sem pedir senhas e coisas do tipo, não vem exatamente ao caso mas os links a seguir podem ser interessantes:"
                },
                {
                    type: "uList",
                    items: [
                        "Conceder permissão ao usuário: <a target='_blank' href='https://serverfault.com/questions/866276/how-to-give-write-permissions-using-setfacl-while-retaining-existing-permissions'>https://serverfault.com/questions/866276/how-to-give-write-permissions-using-setfacl-while-retaining-existing-permissions</a>",
                        "Permitir comandos sudo sem pedir senha: <a href='https://serverfault.com/questions/69847/linux-how-to-give-a-user-permission-to-restart-apache'>https://serverfault.com/questions/69847/linux-how-to-give-a-user-permission-to-restart-apache</a>",
                        "Dicas de segurança para SSH: <a href='http://www.linhadecodigo.com.br/artigo/2974/dicas-avancadas-de-seguranca-para-ssh.aspx'>http://www.linhadecodigo.com.br/artigo/2974/dicas-avancadas-de-seguranca-para-ssh.aspx</a>"
                    ]
                }
            ]
        }
    ]
}

export default AUTOMATED_DEPLOY