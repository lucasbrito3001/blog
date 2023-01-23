import ThumbnailImage from "./thumbnail.png"

const INTEGRACAO_API = {
    thumbnail: ThumbnailImage,
    title: "Como integrar uma API com JavaScript",
    subtitle: "Utilizando o fetch para interagir com uma API.",
    categories: [{ value: "tutorial", text: "Tutorial" }, { value: "development", text: "Desenvolvimento" }],
    introduction: `
        O ECMAScript 6 o'u ECMAScript 2015 ou ES6, é uma padronização da linguagem JavaScript, que trouxe várias novas funcionalidades, como declaração de variáveis com let e const, as arrow functions, e também as funções de manipulação de arrays que é o tema que será abordado nesse artigo.
        Antes de começar, gostaria de deixar claro que essas funções acessam uma função de callback fornecida, uma vez para cada elemento do array. Essa por sua vez, pode ser tanto uma arrow function, quanto uma função declarada da maneira tradicional.
        Nesse artigo iremos utilizar as arrow functions para isso, mas a maneira que você vai utilizar no seu código, fica ao seu critério. Dito isso, vamos ao que interessa:
    `,
    sections: [
        {
            title: "Array.filter( )",
            content: [
                {
                    type: "text",
                    value: "Esta função cria um novo array, com todos os resultados que passaram pelas condições definidas pela sua função de callback.",
                },
                {
                    type: "uList",
                    items: [
                        `<strong>Exemplo:</strong> Digamos que você tenha um array de objetos, onde em cada objeto você tenha um nome de uma pessoa e sua profissão. E o seu objetivo é encontrar todas as pessoas que tenham uma profissão específica. Com filter seria assim:`
                    ]
                },
                {
                    type: 'image',
                    src: './filter.png'
                },
                {
                    type: "text",
                    value: "Ou seja, de uma maneira simples, conseguimos extrair de uma lista todos os elementos que combinem com a nossa condição especificada.",
                }
            ],
        }
    ],
};

export default INTEGRACAO_API;