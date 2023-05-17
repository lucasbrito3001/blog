import ExpressServerHardShutdown from './hard-shutdown'
import ExpressServerGracefulShutdown from './graceful-shutdown'
import HardShutdownTerminal from './assets/hard-shutdown.gif'
import GracefulShutdownTerminal from './assets/graceful-shutdown.gif'

export default {
    title: 'Graceful shutdown com Node.js e Express',
    createdAt: "2023/05/17",
    categories: [
        { value: 'development', text: "Desenvolvimento" },
        { value: 'architecture', text: "Arquitetura" },
        { value: 'nodejs', text: "Node.js" }
    ],
    subtitle: "Qual a diferença entre graceful shutdown e hard shutdown e como fazê-lo em uma API utilizando Node.js",
    introduction: `De forma simples, <em>graceful shutdown</em> e <em>hard shutdown</em> são duas formas de desligar/encerrar um sistema, normalmente relacionada a computadores. O <em>hard shutdown</em> é um procedimento forçado, cujo objetivo é finalizar o sistema imediatamente, encerrando todos os processos e conexões ativas de forma abrupta. Por outro lado, o <em>graceful shutdown</em> é um procedimento "programado", que busca garantir que todos os processos e conexões ativas do sistema sejam concluídos com segurança antes do encerramento, evitando possíveis corrompimentos de arquivos, quebras de conexões, entre outros problemas.`,
    sections: [
        {
            title: 'Como isso se aplica em uma web API',
            content: [
                {
                    type: 'text',
                    value: 'Quando enviamos uma requisição HTTP para uma API, seja pelo navegador, terminal, Postman ou alguma ferramenta semelhante, estabelecemos uma conexão entre o cliente e o servidor web que corresponde ao endereco IP ou URL utilizado, onde o client fica esperando pela resposta do servidor para fechar essa conexão e continuar com o seu fluxo.'
                },
                {
                    type: 'text',
                    value: 'Agora, imagine a seguinte situação: houve um problema na sua API no ambiente de produção, e você precisa desligar ou reiniciar o servidor para aplicar alguma alteração. O que vai acontecer se neste exato momento houver algum processo ou conexão ativa no seu servidor, por exemplo um usuário tentando salvar alguma informação no banco de dados?'
                },
                {
                    type: 'text',
                    value: 'Exatamente, o servidor seria derrubado, as conexões se perderiam e isso poderia causar uma má experiência para o usuário e talvez algum tipo de inconsistência no seu sistema.'
                },
                {
                    type: 'text',
                    value: 'E é exatamente aí que entra o benefício de se programar um graceful shutdown. O que devemos fazer é programar um ouvinte de eventos que, ao identificar um sinal de terminação de processos, primeiro faça com que o servidor bloqueie a entrada de novas requisições no sistema, finalize as que já estão em processamento e somente depois disso se encerre (lembre-se disso).'
                }
            ]
        },
        {
            title: 'Sinais de terminação de processos',
            content: [
                {
                    type: 'text',
                    value: 'Existem várias formas de indicar a um processo que desejamos encerrar sua execução. Neste caso, abordaremos apenas duas dessas situações: quando pressionamos <code class="text-code">CTRL + C</code> no teclado que emite o sinal <code class="text-code">SIGINT</code> e quando usamos o comando <code class="text-code">kill &lt;pid&gt;</code> para o PID (process id) do processo atual que emite o sinal <code class="text-code">SIGTERM</code>.'
                }
            ]
        },
        {
            title: 'Criando a aplicação com Express',
            content: [
                {
                    type: 'text',
                    value: 'Vamos iniciar uma aplicação simples utilizando o framework Express.'
                },
                {
                    type: 'code',
                    value: ExpressServerHardShutdown,
                    lang: 'js'
                },
                {
                    type: 'text',
                    value: 'Dessa forma, como não temos nenhum tratamento de shutdown, quando enviarmos algum dos sinais listados na seção anterior teremos um hard shutdown. No GIF abaixo temos uma demonstração desse cenário, utilizando o comando kill.'
                },
                {
                    type: 'image',
                    src: HardShutdownTerminal
                }
            ]
        },
        {
            title: 'Ouvinte de eventos',
            content: [
                {
                    type: 'text',
                    value: 'Para contornar essa situação, vamos programar um ouvinte de eventos que ao detectar algum sinal de terminação irá iniciar o graceful shutdown, para isso iremos utilizar a aplicação iniciada acima e adicionar algumas alterações.'
                },
                {
                    type: 'code',
                    value: ExpressServerGracefulShutdown
                },
                {
                    type: 'text',
                    value: 'Antes, vale ressaltar que foi criada uma variável chamada <code class="text-code">server</code> que armazena o retorno da função <code class="text-code">app.listen</code> e que será utilizada para fechar o servidor.'
                },
                {
                    type: 'text',
                    value: 'E então, vamos observar o final do código. Estamos iterando por um array que contém os nomes dos sinais de terminação que desejamos manipular e criando um ouvinte para cada um deles utilizando o comando <code class="text-code">process.on(signal, callback)</code>. Isso nos garante que quando o processo receber um desses sinais, iremos chamar a função responsável por fazer o graceful shutdown.'
                },
                {
                    type: 'text',
                    value: 'Para validar o funcionamento faremos um teste que seguirá os seguintes passos:'
                },
                {
                    type: 'uList',
                    items: [
                        "Enviar uma requisição para a API",
                        "Antes da requisiçao terminar, enviar um sinal de interrupção para o processo, utilizando o comando CTRL + C (SIGINT)",
                        "Enquanto o servidor estiver no meio do processo de graceful shutdown, enviar outra requisição para a API"
                    ]
                },
                {
                    type: 'image',
                    src: GracefulShutdownTerminal
                },
                {
                    type: "text",
                    value: 'Como podemos observar no GIF acima, ao tentar interromper o processo da API, o ouvinte capta essa informação e da início ao processo de graceful shutdown. Isso faz com que o servidor fique aguardando o término da requisição ativa e recuse novas conexões, como mostrado na terceira aba do terminal (exatamente como eu tinha dito para você se lembrar) e isso significa que está tudo funcionando!'
                }
            ]
        },
        {
            title: 'Observações',
            content: [
                {
                    type: 'text',
                    value: 'Apesar de podermos concluir que a implementação foi um sucesso, devemos ter em mente que isso é apenas um exemplo simples, sem nenhuma conexão com banco de dados ou implementação real do problema. Caso queira ver uma situação mais completa, eu criei um repositório com um exemplo que você pode acessar neste <a href="https://github.com/lucasbrito3001/graceful-shutdown-blog-post" target="_blank">link</a>.'
                },
                {
                    type: 'text',
                    value: 'Então é isso, espero ter te ajudado, fique bem!'
                }
            ]
        }
    ]
}