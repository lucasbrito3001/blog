export default `
const estoque = [
    { descricao: "teclado", quantidade: 2 },
    { descricao: "mouse", quantidade: 4 },
    { descricao: "webcam", quantidade: 7 },
    { descricao: "mouse", quantidade: 12 },
    { descricao: "headset", quantidade: 5 }
]

const estoqueMouses = estoque.find(item => {
    return item.descricao.toLowerCase() === "mouse"
})

console.log(estoqueMouses)

// { descricao: "mouse", quantidade: 4 }

`