import { useRef } from "react";
import Header from "../../components/home/header";
import Posts from "../../components/home/posts/index"
import Filter from "../../components/shared/filter";
import "./styles.scss";

const FILTERS_FIELDS = [
    {
        label: "Assunto",
        key: 1,
        type: "select",
        colsLg: "4",
        colsMd: "12",
        options: [
            { label: "Arquitetura", value: "architecture" },
            { label: "Desenvolvimento", value: "development" },
            { label: "Tutorial", value: "tutorial" },
            { label: "Carreira", value: "career" },
        ],
    },
    {
        label: "Buscar no título",
        placeholder: "Busque um texto para filtrarmos no título",
        key: 2,
        type: "text",
        colsLg: "6",
        colsMd: "12",
    },
];

export default function Home() {
    return (
        <>
            <aside className="wrapper-header">
                <section id="header">
                    <Header></Header>
                </section>
            </aside>
            <aside className="wrapper-filter">
                <section id="filter">
                    <Filter filterFields={FILTERS_FIELDS} />
                </section>
            </aside>
            <main className="wrapper-posts">
                <section>
                    <Posts></Posts>
                </section>
            </main>
        </>
    );
}
