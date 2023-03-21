export default `
const produtos = [
    { descricao: "smartphone", preco: 1549.90 },
    { descricao: "notebook", preco: 3799.00 },
    { descricao: "webcam", preco: 250.00 },
    { descricao: "monitor", preco: 699.99 }
]

const produtosComDesconto = produtos.map(produto => {
    produto.preco = (produto.preco *= 1.05).toFixed(2)
    return produto
}, 0)

console.log(produtosComDesconto)

// [
//     { "descricao": "smartphone", "preco": "1627.40" },
//     { "descricao": "notebook", "preco": "3988.95" },
//     { "descricao": "webcam", "preco": "262.50" },
//     { "descricao": "monitor", "preco": "734.99" }
// ]

`