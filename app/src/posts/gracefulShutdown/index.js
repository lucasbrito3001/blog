export default {
    title: 'Graceful shutdown com Node.js e Express',
    createdAt: "2023/05/01",
    categories: [
        { value: 'development', text: "Desenvolvimento" },
        { value: 'architecture', text: "Arquitetura" },
        { value: 'nodejs', text: "Node.js" }
    ],
    subtitle: "Qual a diferença entre graceful shutdown e hard shutdown e como fazê-lo em uma API utilizando Node.js",
    introduction: `De forma simples, <em>graceful</em> e <em>hard shutdown</em> são duas formas de desligar / encerrar um sistema, normalmente relacionada a computadores. O <em>hard shutdown</em> é um procedimento forçado, que visa finalizar o sistema matando todos os processos e conexões ativas imediatamente e o <em>graceful shutdown</em> é um procedimento "programado", que visa assegurar que todos os processos ou conexões ativas do sistema sejam completadas com segurança antes do encerramento do sistema, evitando possíveis corrompimentos de arquivos, quebras de conexões etc...`,
    sections: [
        {
            title: 'Como isso se aplica em uma web API',
            content: [
                {
                    type: 'text',
                    value: 'Quando enviamos uma requisição HTTP para uma API, seja pelo navegador, terminal, postman ou alguma ferramenta semelhante, nós estabelecemos uma conexão entre o client e o servidor web referente ao endereco IP ou URL utilizado, onde o client fica esperando pela resposta do servidor para fechar essa conexão e continuar com o seu fluxo.'
                },
                {
                    type: 'text',
                    value: 'Dito isso, vamos imaginar a seguinte situação, houve um problema na sua API no ambiente de produção, e você terá que desligar ou reiniciar o servidor para aplicar alguma alteração, o que aconteceria se neste exato momento houvessem conexões que ainda não foram finalizadas? Exatamente, o servidor seria destruído, as conexões iriam se perder e retornar um erro e isso poderia causar uma má experiência para o usuário e talvez algum tipo de problema no seu sistema.'
                },
                {
                    type: 'text',
                    value: 'E é exatamente aí que entra o benefício de se programar um graceful shutdown. Nesses casos, o ideal é fazer com que o servidor bloqueie a entrada de novas requisições no sistema, finalize as que já estão em processamento e somente depois disso se encerre.'
                }
            ]
        },
        {
            title: 'Sinais de terminação de processos linux',
            content: [
                {
                    type: 'text',
                    value: 'teste'
                }
            ]
        },
        {
            title: 'Criando a aplicação com Express',
            content: [
                {
                    type: 'text',
                    value: 'teste'
                }
            ]
        },
        {
            title: 'Ouvinte de eventos',
            content: [
                {
                    type: 'text',
                    value: 'teste'
                }
            ]
        },
        {
            title: 'Testando o shutdown',
            content: [
                {
                    type: 'text',
                    value: 'teste'
                }
            ]
        }
    ]
}