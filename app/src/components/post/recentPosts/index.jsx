import { Link } from "react-router-dom";
import "./styles.scss";

export default function RecentPosts() {
    return (
        <>
            <header className="px-2">
                <span id="recent-posts-header-text">Postagens recentes</span>
            </header>
            <hr className="my-1"/>
            <ul className="px-2">
                <Link
                    className="recent-posts-link"
                    to="/blog/como-consumir-uma-api-com-javascript"
                >
                    <li>
                        <span className="h4 li-arrow">&rarr;</span>{" "}
                        <span className="li-text">
                            Como consumir uma API com JavaScript
                        </span>
                    </li>
                </Link>
                <Link
                    className="recent-posts-link"
                    to="/blog/testando-quadro-de-código-no-post"
                >
                    <li>
                        <span className="h4 li-arrow">&rarr;</span>{" "}
                        <span className="li-text">
                            Testando quadro de código no post
                        </span>
                    </li>
                </Link>
                <Link
                    className="recent-posts-link"
                    to="/blog/manipulação-de-arrays-javascript-es6"
                >
                    <li>
                        <span className="h4 li-arrow">&rarr;</span>{" "}
                        <span className="li-text">
                            Manipulação de Arrays JavaScript ES6
                        </span>
                    </li>
                </Link>
            </ul>
        </>
    );
}
