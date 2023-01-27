import ThumbnailImage from "./thumbnail.png"

const INTEGRACAO_API = {
    thumbnail: ThumbnailImage,
    title: "Como consumir uma API usando ReactJS e Axios",
    subtitle: "Ensinando o que são e como manipular promises e como usá-las integrando APIs REST com JavaScript.",
    categories: [{ value: "tutorial", text: "Tutorial" }, { value: "development", text: "Desenvolvimento" }],
    introduction: [
        'Se você está estudando para ser um desenvolvedor front-end, é muito importante aprender a integrar seu projeto com uma API.',
        'Isso porque a comunicação entre front-end e back-end é muito utilizada, já que normalmente as conexões com banco de dados, realização de tarefas que envolvem regras de negócio e segurança são aplicadas no back-end.',
        'Mas, para trabalhar com APIs, primeiro precisamos entender um conceito da programação, que são as promises. Portanto vamos separar esse artigo em duas partes, primeiro como trabalhar com promises e segundo como integrar um projeto front-end com uma API.',
    ],
    sections: [
        {
            title: 'Promises',
            content: [
                {
                    type: 'text',
                    value: 'Quando trabalhamos com consumo de APIs REST, as requisições HTTP que enviamos nos retornam uma promise, que como o nome sugere, é uma promessa de que em um momento futuro, uma informação nos será retornada, podendo ser uma resposta de sucesso ou erro.'
                },
                {
                    type: 'text',
                    value: 'Para conseguirmos manipular essas informações, temos que esperar elas retornarem primeiro, e temos duas formas de fazer isso, usando callbacks ou async/await.'
                }
            ]
        },
        {
            title: 'Callback',
            content: [
                {
                    type: 'text',
                    value: 'A forma de tratamento por calllback é síncrono, é como se a gente separasse uma parte da memória do sistema para esperar a resolução da promise e depois tratar a informação devolvida e enquanto isso, paralelamente, seguimos realizando o fluxo do código normalmente.'
                },
                {
                    type: 'text',
                    value: 'Para conseguirmos manipular essas informações, temos que esperar elas retornarem primeiro, e temos duas formas de fazer isso, usando callbacks ou async/await.'
                }
            ]
        },
        {
            title: 'Async / Await',
            content: [
                {
                    type: 'text',
                    value: 'Quando trabalhamos com consumo de APIs REST, as requisições HTTP que enviamos nos retornam uma promise, que como o nome sugere, é uma promessa de que em um momento futuro, uma informação nos será retornada, podendo ser uma resposta de sucesso ou erro.'
                },
                {
                    type: 'text',
                    value: 'Para conseguirmos manipular essas informações, temos que esperar elas retornarem primeiro, e temos duas formas de fazer isso, usando callbacks ou async/await.'
                }
            ]
        }
    ]
};

export default INTEGRACAO_API;