// react hooks
import { useEffect, useState } from "react";

// components
import Post from "../../../components/post/index";
import Presentation from "../../../components/shared/presentation/index";
import Footer from "../../../components/shared/footer/index";

// styles
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/portfolio/navbar";
import PostHeader from "../../../components/post/header";

import { useParams } from "react-router-dom";
import RecentPosts from "../../../components/post/recentPosts";

// posts
import HANDLE_ARRAY from "../../../posts/handleArray";
import STACK_TYPESCRIPT from "../../../posts/stackTypescript";
import AUTOMATED_DEPLOY from "../../../posts/automatedDeploy";
import GRACEFUL_SHUTDOWN from "../../../posts/gracefulShutdown"
import NotFoundPost from "../../../components/post/notFound";

const POST_BY_TITLE = {
    "manipulação-de-arrays-javascript-es6": HANDLE_ARRAY,
    "pilhas-em-typescript": STACK_TYPESCRIPT,
    "como-automatizar-deploy-em-um-vps-com-github-actions": AUTOMATED_DEPLOY,
    "graceful-shutdown-com-node.js-e-express": GRACEFUL_SHUTDOWN
};

export default function Home() {
    const { title } = useParams();

    const [post, setPost] = useState({});
    const [scrollTop, setScrollTop] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => setScrollTop(window.scrollY);
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!title) return;
        setPost(POST_BY_TITLE[title]);
        window.scrollTo(0, 0)
    }, [title]);

    return (
        post
            ? <>
                <div id="blog-navbar">
                    <Navbar scrollTop={scrollTop} transitionHeight={400}/>
                </div>
                <div className="wrapper-post">
                    { post.categories && (
                        <PostHeader
                            postTitle={post.title}
                            postSubtitle={post.subtitle}
                            postCategories={post.categories}
                        ></PostHeader>
                    )}
                    <Container>
                        <Row className="py-4 gy-4">
                            <Col xs="12">
                                <Post post={post} />
                            </Col>
                            <Col xs="12">
                                <aside id="presentation">
                                    <Row className="gy-3">
                                        <Col xs="12" lg="5" xxl="4">
                                            <div className="h-100">
                                                <Presentation />
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="7" xxl="8">
                                            <div className="h-100">
                                                <RecentPosts />
                                            </div>
                                        </Col>
                                    </Row>
                                </aside>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
            : <NotFoundPost></NotFoundPost>
    );
}
