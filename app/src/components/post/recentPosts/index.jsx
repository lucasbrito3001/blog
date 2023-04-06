import { Link } from "react-router-dom";
import "./styles.scss";

const t = [
    { title: "Como consumir uma API com JavaScript" },
    { title: "Manipulação de Arrays JavaScript ES6" }
];

export default function RecentPosts() {
    return (
        <>
            <header className="px-2">
                <span id="recent-posts-header-text">Postagens recentes</span>
            </header>
            <hr className="my-1" />
            <ul className="px-2">
                {t.map((post) => {
                    return (
                        <Link
                            className="recent-posts-link"
                            to={`/blog/${post.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                            <li>
                                <span className="h4 li-arrow">&rarr;</span>{" "}
                                <span className="li-text">
                                    {post.title}
                                </span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </>
    );
}
