import { Fragment } from "react";

// styles
import "./styles.scss";

// components
import Title from "./title/index";
import SectionTitle from "./sectionTitle/index";
import Subtitle from "./subtitle/index.jsx";
import Thumbnail from "./thumbnail/index";
import Introduction from "./introduction/index";
import Text from "./text/index.jsx";
import Image from "./image/index";
import UnorderedList from "./unorderedList/index";
import Code from "./code/index";

export default function Post({post}) {
    function renderSections(postSections) {
        const SECTION_ELEMENTS = {
            text: (section) => <Text text={section.value}></Text>,
            image: (section) => (
                <Image srcImage={section.src} srcAlt={section.alt} />
            ),
            uList: (section) => (
                <UnorderedList list={section.items}></UnorderedList>
            ),
            code: (section) => (
                <Code code={section.value}></Code>
            )
        };

        return postSections.map((section, idx) => {
            return <Fragment key={`section-${idx}`}>{SECTION_ELEMENTS[section.type](section)}</Fragment>;
        });
    }

    return (
        post.title && (
            <article className="wrapper-post-content shadow p-4 p-lg-5">
                <section>
                    <SectionTitle title="Introdução"></SectionTitle>
                    <Introduction intro={post.introduction}></Introduction>
                </section>
                {post.sections.map((section, idx) => (
                    <section className="mb-3 mt-5" key={`postSection-${idx}`}>
                        <SectionTitle title={section.title}></SectionTitle>
                        {renderSections(section.content)}
                    </section>
                ))}
            </article>
        )
    );
}
