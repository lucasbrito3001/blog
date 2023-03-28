import StackArray from './stackStep1'
import StackArrayMethods from './stackArrayMethods'

const STACK_TYPESCRIPT = {
    title: "Pilhas em TypeScript",
    subtitle: "O que é a estrutura de dados de pilha, para que serve e como criar uma com TypeScript.",
    categories: [{ value: "data-sctructure", text: "Estrutura de Dados"}],
    createdAt: "2023/03/25",
    introduction: `
        Uma pilha basicamente é uma lista de dados, que armazena items empilhando um acima do outro, e que segue o princípio LIFO (last-in first-out), onde o último item a entrar será o primeiro a sair, isso significa que, as ações de inserir e retirar itens devem ser feitas no topo da pilha.
        Uma pilha de pratos em um buffet é um exemplo de uma pilha, sempre que um prato é adicionado na pilha, ele fica no topo e passa a ser também o primeiro item que sairá. Acontece a mesma coisa com o botão de voltar do seu navegador, quando você clica nele, a última página que você visitou (last-in) será a primeira a ser acessada (first-out).
    `,
    sections: [
        {
            title: "Armazenamento de dados",
            content: [
                {
                    type: "text",
                    value: "Quando falamos de listagem de dados em JavaScript / TypeScript, é comum pensarmos na utilização de arrays, que é a estrutura comumente usada para tratar esse tipo de dado, porém, também é possível trabalhar com listas utilizando objetos. Ambos os tipos solucionam bem o problema. Nesse artigo iremos criar pilhas utilizando os dois e falaremos um pouco das suas vantagens e desvantagens."
                }
            ]
        },
        {
            title: "Pilhas com Arrays",
            content: [
                {
                    type: "text",
                    value: "Primeiro, vamos criar uma classe de tipo genérico que represente a nossa pilha."
                },
                {
                    type: "code",
                    value: StackArray
                },
                {
                    type: "text",
                    value: "E então, no constructor vamos definir o valor da propriedade items como um array vazio, que será onde os nossos items da pilha ficarão. Também teremos alguns métodos que serão usados para adicionar, remover, buscar o tamanho da lista, e verificar se a mesma está vazia."
                },
                {
                    type: "code",
                    value: StackArrayMethods
                },
                {
                    type: "text",
                    value: "Seguindo o princípio LIFO, ao adicionar um item no método add {1}, devemos colocá-lo no topo da lista, para isso podemos utilizar a função .push, ao remover no método remove {2}, devemos retirar o elemento do topo da lista, ou seja, o último, para isso podemos utilizar a função .pop, para verificar o tamanho da lista na função length {3}, podemos simplesmente ler o tamanho do nosso array, com a propriedade .length e para verificar se nossa pilha está vazia ou não temos o método isEmpty {4} que nos retorna um valor booleano, true se o tamanho do array for igual a zero e false caso não seja."
                },
            ]
        }
    ]
}

export default STACK_TYPESCRIPT