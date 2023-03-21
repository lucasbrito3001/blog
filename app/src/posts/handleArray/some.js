export default `
const programadores = [
    { name: "Marcos", habilidades: ["PHP", "JavaScript"] },
    { name: "Bianca", habilidades: ["JavaScript", "Python"] },
    { name: "Michel", habilidades: ["Python"] },
    { name: "Hellen", habilidades: ["Go", "Swift"] },
    { name: "Sandra", habilidades: ["Java", "C#"] },
]

const alguemSabeJs = programadores.some(programador => {
    return programador.habilidades.includes("JavaScript")
})

console.log(
    alguemSabeJs
        ? "Existe pelo menos um programador que sabe JavaScript"
        : "Não existe nenhum programador que sabe JavaScript"
)

// Existe pelo menos um programador que sabe JavaScript

`