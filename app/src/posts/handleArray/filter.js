export default `
const pessoasEProfissoes = [
    { nome: "José", profissao: "Dev" },
    { nome: "Maria", profissao: "UX/UI" },
    { nome: "Ana", profissao: "Dev" },
    { nome: "Carlos", profissao: "Tester" }
]

const pessoasDevs = pessoasEProfissoes.filter(pessoa => {
    return pessoa.profissao.toLowerCase() === "dev"
})

console.log(pessoasDevs)

// [
//      { nome: "José", profissao: "Dev" },
//      { nome: "Ana", profissao: "Dev" }
// ]

`