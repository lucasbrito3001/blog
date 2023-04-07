import StartStackArray from './scripts/array/stackStep1'
import Push from './scripts/array/push'
import Pop from './scripts/array/pop'
import GetStack from './scripts/array/getStack'
import StackObject from './scripts/object/stack'

import PushObject from './scripts/object/push'
import PopObject from './scripts/object/pop'
import GetStackObject from './scripts/object/getStack'
import StartStackObject from './scripts/object/stackDefinition'

import StackPNG from './assets/stack.jpg'

const STACK_TYPESCRIPT = {
    title: "Pilhas em TypeScript",
    subtitle: "O que é a estrutura de dados de pilha, para que serve e como criar uma com TypeScript.",
    categories: [
        { value: "data-structure", text: "Estrutura de Dados"},
        { value: "ts", text: "TypeScript"}
    ],
    createdAt: "2023/04/06",
    introduction: `
        Uma pilha basicamente é uma lista de dados, que armazena items empilhando um acima do outro, e que segue o princípio LIFO (last-in first-out), onde o último item a entrar será o primeiro a sair, isso significa que, as ações de inserir e retirar itens devem ser feitas no topo da pilha.
        Uma pilha de pratos em um buffet é um exemplo de uma pilha, sempre que um prato é adicionado na pilha, ele fica no topo e passa a ser também o primeiro item que sairá. Acontece a mesma coisa com o botão de voltar do seu navegador, quando você clica nele, a última página que você visitou (last-in) será a primeira a ser acessada (first-out).
    `,
    sections: [
        {
            title: "Armazenamento dos dados",
            content: [
                {
                    type: "text",
                    value: "Quando falamos de listagem de dados em JavaScript / TypeScript, é comum pensarmos na utilização de arrays, que é a estrutura comumente usada para tratar esse tipo de dado, porém, também é possível trabalhar com listas utilizando objetos. Ambos os tipos solucionam bem o problema, a diferença está no nível de complexidade das operações, seguindo a notação Big O, em um objeto o nível para operações de leitura e inserções é de O(1), ou seja, constante, enquanto nos arrays a ordem de leitura também é O(1) mas a de inserção é O(n) ou seja, linear, por isso, utilizar objetos pode trazer maior performance para o nosso código. Para fins didáticos, iremos criar exemplos com os dois tipos de dados."
                }
            ]
        },
        {
            title: "Métodos necessários",
            content: [
                {
                    type: "text",
                    value: "Nos dois exemplos precisaremos criar os métodos listados abaixo, para manipular os nossos dados:"
                },
                {
                    type: "uList",
                    items: [
                        "push: usado para adicionar um item no topo da pilha",
                        "pop: usado para remover o item do topo da pilha",
                        "getStack: usado para ver os items da pilha"
                    ]
                }
            ]
        },
        {
            title: "Pilhas com Arrays",
            content: [
                {
                    type: "text",
                    value: "Primeiro, vamos criar uma classe de tipo genérico que represente a pilha, e definir no constructor o valor inicial da propriedade items - onde ficarão armazenados os itens da pilha - como um array vazio."
                },
                {
                    type: "code",
                    value: StartStackArray
                },
            ]
        },
        {
            title: "push()",
            content: [
                {
                    type: "text",
                    value: "O método push recebe um parâmetro chamado item, que deve ter o mesmo tipo T passado ao instanciar a classe, e para adicionar o item ao final do array usamos a função .push() dos arrays JavaScript."
                },
                {
                    type: "code",
                    value: Push
                }
            ]
        },
        {
            title: "pop()",
            content: [
                {
                    type: "text",
                    value: "O método pop deve retirar o último item adicionado na lista, nesse caso, é o último elemento do array, portanto, para isso pode-se utilizar a função .pop() dos arrays JavaScript."
                },
                {
                    type: "code",
                    value: Pop
                }
            ]
        },
        {
            title: "getStack()",
            content: [
                {
                    type: "text",
                    value: "No método getStack a gente basicamente retorna a propriedade this.items, já que ela foi definida como privada."
                },
                {
                    type: "code",
                    value: GetStack
                }
            ]
        },
        {
            title: "Pilhas com Objetos",
            content: [
                {
                    type: "text",
                    value: "Vamos começar da mesma forma que no exemplo utilizando arrays, porém, nesse caso, o valor inicial da propriedade items será um objeto vazio e também iremos definir uma outra propriedade chamada count que irá representar a key do último item do objeto, servindo como um index, e iniciá-la como 0."
                },
                {
                    type: "code",
                    value: StartStackObject
                }
            ]
        },
        {
            title: "push()",
            content: [
                {
                    type: "text",
                    value: "A função push recebe um parâmetro chamado item, que deve ter o mesmo tipo T passado ao instanciar a classe, e o adicionará ao topo da lista."
                },
                {
                    type: "code",
                    value: PushObject
                },
                {
                    type: "text",
                    value: "Note que agora a abordagem muda, primeiro definimos o valor atual de this.count como uma propriedade do objeto items, atribuindo o valor igual ao do item passado por parâmetro, e ao final, incrementamos 1 ao count."
                },
            ]
        },
        {
            title: "pop()",
            content: [
                {
                    type: "text",
                    value: "A função pop, como citado anteriormente, deve simplesmente remover o último item da lista."
                },
                {
                    type: "code",
                    value: PopObject
                },
                {
                    type: "text",
                    value: "Igual ao caso do push, a abordagem também muda um pouco, nesse caso, para remover o último item da lista, primeiro temos que decrementar o valor de this.count em 1 - porque sempre que adicionamos um novo item, nós setamos o seu valor como <code class='text-code'>index do topo + 1</code> - depois, usamos o método <code class='text-code'>delete</code> nativo dos objetos do JavaScript, usando como referência a propriedade this.count, já que agora ela representa o index do topo da pilha, assim mantemos sempre o controle de qual é a key do último item."
                },
            ]
        },
        {
            title: "getStack()",
            content: [
                {
                    type: "text",
                    value: "Na função getStack não temos nenhuma alteração, também retornamos somente a propriedade this.items."
                },
                {
                    type: "code",
                    value: GetStackObject
                }
            ]
        },
        {
            title: "Exemplo",
            content: [
                {
                    type: "text",
                    value: "Vamos fazer alguns testes e visualizar o funcionamento do nosso código, utilizando a estrutura de pilha criada com objetos."
                },
                {
                    type: "code",
                    value: StackObject
                },
                {
                    type: "text",
                    value: "De forma resumida, ao usar a função push adicionamos um novo item ao topo da nossa pilha - literalmente empilhando um item - aumentado o seu tamanho, e ao usar a função pop retiramos o item do topo e reduzimos o tamanho, a figura abaixo ilustra bem os passos do script acima:"
                },
                {
                    type: "image",
                    src: StackPNG
                }
            ]
        }
    ]
}

export default STACK_TYPESCRIPT;