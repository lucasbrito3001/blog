import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HANDLE_ARRAY from "../../posts/handleArray/index";
import API_INTEGRATION from "../../posts/apiIntegration/index";

const POST_BY_TITLE = {
    "manipulação-de-arrays-javascript-es6": HANDLE_ARRAY,
    "como-integrar-uma-api-com-javascript": API_INTEGRATION,
};

// styles
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

// components
import Title from "./title/index";
import SectionTitle from "./sectionTitle/index";
import Subtitle from "./subtitle/index.jsx";
import Thumbnail from "./thumbnail/index";
import Introduction from "./introduction/index";
import Text from "./text/index.jsx";
import Image from "./image/index";
import UnorderedList from "./unorderedList/index";

export default function Post() {
    const { title } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        if (!title) return;
        setPost(POST_BY_TITLE[title]);
    }, [title]);

    function renderSections(postSections) {
        console.log(postSections);
        const SECTION_ELEMENTS = {
            text: (section) => <Text text={section.value}></Text>,
            image: (section) => (
                <Image srcImage={section.src} srcAlt={section.alt} />
            ),
            uList: (section) => (
                <UnorderedList list={section.items}></UnorderedList>
            ),
        };

        return postSections.map((section) => {
            console.log(section.type);
            return SECTION_ELEMENTS[section.type](section);
        });
    }

    return (
        post.title && (
            <article className="wrapper-post p-4 p-lg-5">
                <header className="mb-4 mb-lg-5">
                    <div className="mb-4 mb-lg-5">
                        <Title title={post.title}></Title>
                        <Subtitle
                            subtitle={post.subtitle}
                            muted={true}
                        ></Subtitle>
                    </div>
                    <div>
                        <Thumbnail srcImage={post.thumbnail}></Thumbnail>
                    </div>
                </header>
                <section>
                    <Introduction intro={post.introduction}></Introduction>
                </section>
                {post.sections.map((section) => (
                    <section className="mb-3 mt-5">
                        <SectionTitle title={section.title}></SectionTitle>
                        {renderSections(section.content)}
                    </section>
                ))}
            </article>
        )
    );
}
