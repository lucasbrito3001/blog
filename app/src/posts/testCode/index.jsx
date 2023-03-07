import ThumbnailImage from "./thumbnail.png";
import CodeTest from "./test.js";

const INTEGRACAO_API = {
    thumbnail: ThumbnailImage,
    title: "Testando quadro de código no post",
    subtitle: "Utilizando o fetch para interagir com uma API.",
    categories: [
        { value: "tutorial", text: "Tutorial" },
        { value: "development", text: "Desenvolvimento" },
    ],
    createdAt: '2023-02-04',
    introduction: ["123", "123"],
    sections: [
        {
            title: "Usando código",
            content: [
                {
                    type: "code",
                    value: CodeTest,
                },
            ],
        },
    ],
};

export default INTEGRACAO_API;
