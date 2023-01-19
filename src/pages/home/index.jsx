import { useRef, useState } from "react";
import Header from "../../components/home/header";
import Posts from "../../components/home/posts/index"
import Filter from "../../components/shared/filter";
import "./styles.scss";

const FILTERS_FIELDS = [
    {
        label: "Assunto",
        value: "category",
        key: 1,
        type: "select",
        isMulti: true,
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
        value: "title",
        placeholder: "Busque um texto para filtrarmos no título",
        key: 2,
        type: "search",
        colsLg: "6",
        colsMd: "12",
    },
];

export default function Home() {
    const [categorySelected, setCategorySelected] = useState('')
    const [titleSearched, setTitleSearched] = useState('')

    function searchByFilters(values) {
        setCategorySelected(values.category)
        setTitleSearched(values.title)
    }

    return (
        <>
            <aside className="wrapper-header">
                <section id="header">
                    <Header></Header>
                </section>
            </aside>
            <aside className="wrapper-filter">
                <section id="filter">
                    <Filter filterFields={FILTERS_FIELDS} submitForm={searchByFilters}/>
                </section>
            </aside>
            <main className="wrapper-posts">
                <section>
                    <Posts categories={categorySelected} titleSearched={titleSearched}></Posts>
                </section>
            </main>
        </>
    );
}
