const projects = [
    {
        name: "Dexterbulls - Moda Country",
        category: 'Loja virtual',
        stacks: ['front-end', 'back-end', 'devops'],
        appUrl: 'https://dexterbulls.com.br'
    },
    {
        name: "Blog pessoal",
        category: 'Blog',
        stacks: ['front-end', 'back-end', 'devops'],
        repoUrl: 'https://github.com/lucasbrito3001/blog',
        appUrl: 'https://lucasdbrito.com/#/blog'
    },
    {
        name: "Conversor de criptomoedas",
        category: 'Ferramenta financeira',
        stacks: ['front-end', 'back-end'],
        repoUrl: 'https://github.com/lucasbrito3001/cryptos-wallet',
        appUrl: 'https://cryptos-converter.lucasdbrito.com/'
    },
    {
        name: "Notícias sobre voos espaciais",
        category: 'Canal de notícias',
        stacks: ['front-end'],
        repoUrl: 'https://github.com/lucasbrito3001/spaceflight-news',
        appUrl: 'https://spaceflightnews.lucasdbrito.com'
    },
    {
        name: "Busca de bandeiras",
        category: 'Ferramenta informativa',
        stacks: ['front-end'],
        repoUrl: 'https://github.com/lucasbrito3001/countries-nuxt-vuetify',
        appUrl: 'https://flags.lucasdbrito.com/'
    },
]

export async function getProjects() {
    try {
        return { status: true, content: projects }
    } catch (error) {
        return { status: false, error }
    }
}