const courses = [
    { 
        name: 'Engenharia de Controle e Automação',
        institution: 'UTFPR - CP',
        date: '2018 ~ 2020',
        place: 'Cornélio Procópio - PR',
        description: [
            'Fiz os 2 primeiros anos da graduação, e por motivos pessoais optei por trancar o curso.',
            'Nesse tempo, aprendi muito sobre cálculo, física, química, programação e gestão. Conhecimentos estes que me ajudaram muito a desenvolver o raciocínio lógico.',
            'Além da parte técnica, o contato que pude ter com pessoas de diversos lugares diferentes mudou minha vida, pois me fez entender sobre assuntos relacionados a diversidade, culturas, empatia e comunicação.'
        ]
    },
    { 
        name: 'Iniciação Científica',
        institution: 'UTFPR / CNPq',
        date: '2020',
        place: 'Cornélio Procópio - PR',
        description: [
            'Na universidade fui contemplado com uma bolsa do PIBIC, e junto com meu orientador, desenvolvi uma pesquisa baseada em controle e filtragem robusta em sistemas lineares variantes e invariantes no tempo.'
        ]
    },
    {
        name: 'Técnico em Administração',
        institution: 'ETEC Dr. Renato Cordeiro',
        date: '2015 ~ 2017',
        place: 'Birigui - SP',
        description: [
            'Durante o curso aprendi sobre informática, marketing, matemática financeira, empreendedorismo, recursos humanos, logística, entre outros temas.'
        ]
    }
]

export async function getAcademical() {
    try {
        return { status: true, content: courses }
    } catch (error) {
        return { status: false, error }
    }
}