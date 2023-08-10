const positions = [
	{
		name: "Trademaster",
		place: "São Paulo - BR (remoto)",
		positions: [
			{
				time: "JUN 2023 ~ ATUAL",
				name: "DevOps Jr.",
				description:
					"Manutenção e desenvolvimento de soluções relacionadas a DevOps, como monitoramento e controle de clusters Kubernetes, serviços do GCP e afins.",
				technologies: [
					"Kubernetes",
					"Docker",
                    "Helm",
					"Linux",
					"GCP",
					"Jenkins",
                    "GitHub Actions",
					"Shell Script",
					"RabbitMQ",
				],
			},
		],
	},
	{
		name: "CBYK",
		place: "São Paulo - BR (remoto)",
		positions: [
			{
				time: "SET 2022 ~ MAI 2023",
				name: "Desenvolvedor Full Stack",
				description: "Manutenção e desenvolvimento de aplicações full stack.",
				technologies: [
					"JavaScript",
					"React",
					"Bootstrap",
					"axios",
					"Node",
					"Express",
					"Kraken",
					"SQL Server",
					"GIT",
				],
			},
		],
	},
	{
		name: "Lexartlabs",
		place: "Montevidéu - UY (remoto)",
		positions: [
			{
				time: "MAR 2022 ~ SET 2022",
				name: "Arquiteto de Software Jr.",
				description:
					"Manutenção e desenvolvimento de aplicações full stack e gerenciamento de projetos e ambientes.",
				technologies: [
					"JavaScript",
					"Vue",
					"AngularJs",
					"Bootstrap",
					"axios",
					"Node",
					"Express",
					"MySQL",
					"MongoDB",
					"Apache",
					"GIT",
					"SSH",
					"Shell script",
					"Espanhol",
				],
			},
			{
				time: "DEZ 2021 ~ MAR 2022",
				name: "Desenvolvedor Full Stack",
				description: "Manutenção e desenvolvimento de aplicações full stack.",
				technologies: [
					"JavaScript",
					"Vue",
					"AngularJs",
					"Bootstrap",
					"axios",
					"Node",
					"Express",
					"MySQL",
					"MongoDB",
					"Lumen",
					"Espanhol",
				],
			},
			{
				time: "JUN 2021 ~ DEZ 2021",
				name: "Desenvolvedor Front-end",
				description: "Manutenção e desenvolvimento de páginas web responsivas.",
				technologies: [
					"JavaScript",
					"Vue",
					"AngularJs",
					"Bootstrap",
					"axios",
					"Espanhol",
				],
			},
		],
	},
	{
		name: "MOVA P2P",
		place: "Itajubá - BR (remoto)",
		positions: [
			{
				time: "ABR 2021 ~ AGO 2021",
				name: "Desenvolvedor Front-end",
				description: "Manutenção e desenvolvimento de páginas web responsivas.",
				technologies: ["JavaScript", "Vue", "Nuxt", "Vuetify", "Jest"],
			},
		],
	},
];

export async function getCareer() {
	try {
		return { status: true, content: positions };
	} catch (error) {
		return { status: false, error };
	}
}
