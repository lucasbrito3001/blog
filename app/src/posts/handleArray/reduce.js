export default `
const estoque = [
    { descricao: "teclado", quantidade: 2, preco: 329.99 },
    { descricao: "mouse sem fio", quantidade: 4, preco: 79.99 },
    { descricao: "webcam", quantidade: 7, preco: 249.90 },
    { descricao: "mouse com fio", quantidade: 12, preco: 120.99 },
    { descricao: "headset", quantidade: 5, preco: 289.99 }
]

const patrimonio = estoque.reduce((montante, item) => {
    return montante += (item.preco * item.quantidade)
}, 0)

console.log(patrimonio)

// 5631.07

`