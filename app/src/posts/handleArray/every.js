export default `
const programadores = [
    { name: "Marcos", habilidades: ["PHP", "JavaScript"] },
    { name: "Bianca", habilidades: ["JavaScript", "Python"] },
    { name: "Michel", habilidades: ["Python"] },
    { name: "Hellen", habilidades: ["Go", "Swift"] },
    { name: "Sandra", habilidades: ["Java", "C#"] },
]

const todosSabemJs = programadores.every(programador => {
    return programador.habilidades.includes("JavaScript")
})

console.log(
    todosSabemJs
        ? "Todos os funcionários sabem JavaScript"
        : "Existe pelo menos um programador que não sabe JavaScript"
)

// Existe pelo menos um programador que não sabe JavaScript

`