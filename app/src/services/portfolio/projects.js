const projects = [
    {
        name: "Blog pessoal",
        status: 1,
        category: 'Blog',
        stacks: ['front-end', 'back-end', 'devops'],
        repoUrl: 'https://github.com/lucasbrito3001/blog',
        appUrl: 'https://lucasdbrito.com/#/blog'
    },
    {
        name: "Landind page consultoria",
        status: 1,
        category: 'Landing page',
        stacks: ['front-end'],
        repoUrl: 'https://github.com/lucasbrito3001/britze-v1',
        appUrl: 'https://britze.lucasdbrito.com/'
    },
    {
        name: "Conversor de criptomoedas",
        status: 1,
        category: 'Ferramenta financeira',
        stacks: ['front-end', 'back-end'],
        repoUrl: 'https://github.com/lucasbrito3001/cryptos-wallet',
        appUrl: 'https://cryptos-converter.lucasdbrito.com/'
    },
    {
        name: "Notícias voos espaciais",
        status: 1,
        category: 'Canal de notícias',
        stacks: ['front-end'],
        repoUrl: 'https://github.com/lucasbrito3001/spaceflight-news',
        appUrl: 'https://spaceflightnews.lucasdbrito.com'
    },
    {
        name: "Busca de bandeiras",
        status: 1,
        category: 'Ferramenta informativa',
        stacks: ['front-end'],
        repoUrl: 'https://github.com/lucasbrito3001/countries-nuxt-vuetify',
        appUrl: 'https://flags.lucasdbrito.com/'
    },
    {
        name: "Dexterbulls - Moda Country",
        status: 0,
        category: 'Loja virtual',
        stacks: ['front-end', 'back-end', 'infra'],
        appUrl: 'https://dexterbulls.com.br'
    },
]

export async function getProjects() {
    try {
        return { status: true, content: projects }
    } catch (error) {
        return { status: false, error }
    }
}