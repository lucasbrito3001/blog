// import ThumbnailImage from "./thumbnail.png"

import FilterCode from "./filter"
import FindCode from "./find"
import MapCode from "./map"
import ReduceCode from "./reduce"
import SomeCode from "./some"
import EveryCode from "./every"

const MANIPULACAO_ARRAY = {
    // thumbnail: ThumbnailImage,
    title: "Manipulação de Arrays JavaScript ES6",
    subtitle: "Aprenda como e quando trabalhar com as funções filter, find, map, reduce, some, e every.",
    categories: [{ value: "js", text: "JavaScript" }],
    createdAt: '2022/01/13',
    introduction: "O ECMAScript 6 ou ECMAScript 2015 ou ES6, é uma padronização da linguagem JavaScript, que trouxe várias novas funcionalidades, como declaração de variáveis com let e const, as arrow functions, e também as funções de manipulação de arrays que é o tema que será abordado nesse artigo.",
    sections: [
        {
            title: "Antes de começar",
            content: [
                {
                    type: "text",
                value: "Gostaria de deixar claro que essas funções acessam uma função de callback fornecida, uma vez para cada elemento do array. Essa por sua vez, pode ser tanto uma arrow function, quanto uma função declarada da maneira tradicional."
                },
                {
                    type: "text",
                value: "Nesse artigo iremos utilizar as arrow functions para isso, mas a maneira que você vai utilizar no seu código, fica ao seu critério. Dito isso, vamos ao que interessa:"
                }
            ]
        },
        {
            title: "Array.filter( )",
            content: [
                {
                    type: "text",
                    value: "Esta função cria um novo array, com todos os resultados que passaram pelas condições definidas pela sua função de callback.",
                },
                {
                    type: "text",
                    value: `Por exemplo, digamos que você tenha um array de objetos, onde em cada objeto você tenha um nome de uma pessoa e sua profissão. E o seu objetivo é encontrar todas as pessoas que tenham uma profissão específica. Com filter seria assim:`
                },
                {
                    type: "code",
                    value: FilterCode
                },
                {
                    type: "text",
                    value: "Ou seja, de uma maneira simples, conseguimos extrair de uma lista todos os elementos que combinem com a nossa condição especificada.",
                }
            ],
        },
        {
            title: "Array.find( )",
            content: [
                {
                    type: "text",
                    value: "Esta função retorna o primeiro elemento do array que satisfaz as condições definidas pela sua função de callback, caso nenhum elemento combine, o seu retorno será undefined.",
                },
                {
                    type: "text",
                    value: `Por exemplo, digamos que você tenha um array de objetos, onde em cada objeto você tem um item e suas quantidades. E o seu objetivo é encontrar somente o primeiro elemento dessa lista que satisfaça a condição especificada. Com find seria assim:`
                },
                {
                    type: "code",
                    value: FindCode
                },
                {
                    type: "text",
                    value: "Assim, de uma maneira simples, conseguimos extrair de uma lista apenas o primeiro elemento que combine com a nossa condição especificada, note que existem dois elementos com descrição “mouse”, porém ele me retornou somente o primeiro match.",
                }
            ],
        },
        {
            title: "Array.map( )",
            content: [
                {
                    type: "text",
                    value: "Esta função retorna um novo array, com o resultado das instruções especificadas pela sua função de callback.",
                },
                {
                    type: "text",
                    value: `Por exemplo, digamos que você tenha um array de objetos, onde em cada objeto você tenha produtos e seus preços. E o seu objetivo é diminuir o preço de todos eles em 5%, simulando um desconto.`
                },
                {
                    type: "code",
                    value: MapCode
                },
                {
                    type: "text",
                    value: "Assim, temos como resultado então um novo array, basicamente igual ao anterior, porém com todos seus preços alterados, onde todos foram diminuídos em 5% do valor antigo.",
                }
            ],
        },
        {
            title: "Array.reduce( )",
            content: [
                {
                    type: "text",
                    value: "Esta função retorna um único valor, referente ao resultado das execuções da função de callback para cada elemento.",
                },
                {
                    type: "text",
                    value: "Por exemplo, digamos que você tenha um array de objetos, que faz referência a um estoque, e você queira saber quanto vale o seu estoque:"
                },
                {
                    type: 'code',
                    value: ReduceCode,
                },
                {
                    type: "text",
                    value: "Assim, temos como resultado um valor somente, que representa o valor total do seu estoque, calculado de maneira simples e rápida.",
                }
            ],
        },
        {
            title: "Array.some( )",
            content: [
                {
                    type: "text",
                    value: "Esta função verifica se pelo menos um dos elementos do seu array, satisfaz as condições definidas na sua função de callback. Retornando true ou false.",
                },
                {
                    type: "text",
                    value: "Por exemplo, digamos que você tenha um array de objetos, que representa os funcionários de uma empresa e as suas habilidades, e você quer saber se pelo menos um desses funcionários tem conhecimento em JavaScript:"
                },
                {
                    type: 'code',
                    value: SomeCode,
                },
                {
                    type: "text",
                    value: "Assim, temos como resultado então, um valor booleano, basicamente o que verificamos com o some e includes foi se existe no array de habilidades de cada funcionário o elemento “JavaScript” caso exista o retorno será true, caso não exista será false e assim temos como resultado um array com vários booleanos representando essa verificação, depois disso, fizemos o some para verificar se dentro desse array existe pelo menos um valor true, ou seja, se pelo menos um funcionário tem “JavaScript” no seu array de habilidades.",
                }
            ],
        },
        {
            title: "Array.every( )",
            content: [
                {
                    type: "text",
                    value: "Esta função verifica se todos os elementos do seu array, satisfaz as condições definidas na sua função de callback. Retornando true ou false.",
                },
                {
                    type: "text",
                    value: "Vamos utilizar o mesmo exemplo acima, porém dessa vez você quer saber se todos os seus funcionários tem conhecimento em JavaScript:"
                },
                {
                    type: 'code',
                    value: EveryCode,
                },
                {
                    type: "text",
                    value: "Fizemos o mesmo passo do exemplo anterior, verificando por every e includes se existe o elemento “JavaScript” no array de habilidades de cada funcionário, mas dessa vez fizemos o every para verificar se dentro desse array todos os elementos tem valor true, ou seja, se todos os funcionário tem “JavaScript” no seu array de habilidades.",
                }
            ],
        },
        {
            title: "Dicas de quando usar:",
            content: [
                {
                    type: "uList",
                    items: [
                        "Filter: quando você precisar filtrar todos os elementos do seu array com uma propriedade específica.",
                        "Find: quando você precisa encontrar um elemento específico dentro do seu array, e só te importa a primeira combinação da sua condição.",
                        "Map: quando você precisa alterar propriedades específicas do seu array, mantendo a mesma estrutura.",
                        "Reduce: quando você precisa tornar o seu array em um valor único, por exemplo somar valores e concatenar strings.",
                        "Some: quando você precisa verificar se pelo menos um elemento do seu array satisfaz suas condições.",
                        "Every: quando você precisa verificar se exatamente todos os elementos do seu array satisfazem as suas condições."
                    ]
                }
            ]
        }
    ],
};

export default MANIPULACAO_ARRAY;