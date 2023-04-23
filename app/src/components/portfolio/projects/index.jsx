// styles
import { Button, Col, Container, Row } from "react-bootstrap";

// services
import { getProjects } from "../../../services/portfolio/projects";

// react hooks
import { useEffect, useState, Fragment } from "react";


import "./styles.scss";

export default function Projects() {
    const [selected, setSelected] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getProjectsOnLoad() {
            const { status, content, error } = await getProjects()

            if(!status) return error

            setProjects(content)
        }

        getProjectsOnLoad()
    }, [])

    return (
        <Container>
            <Row className="pt-3 pt-lg-5 pb-3">
                <Col>
                    <header>
                        <h1 className="sections-title title-light">projetos</h1>
                    </header>
                </Col>
            </Row>
            <Row className="pb-3 pb-lg-5 gy-0 gy-lg-4">
                { projects.length > 0 && projects.map((project, idxProject) => (
                    <Col
                        key={`project-${idxProject}`}
                        onMouseLeave={() => setSelected(null)}
                        onMouseEnter={() => setSelected(idx)}
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        <h2 className="project-category">{ project.category }</h2>
                        <h1 className="project-name">{ project.name }</h1>
                        <ul className="d-flex flex-wrap align-items-center gap-2">
                            <span className="projects-stacks-separator">&gt;&lt;</span>{
                                project.stacks.map((stack, idxStack) => <Fragment key={`stack-${idxStack}`}>
                                    <li>
                                        { stack }
                                    </li>
                                    <span className="projects-stacks-separator">&gt;&lt;</span>
                                </Fragment>)

                            }
                        </ul>
                        <div className="d-flex gap-2 mt-2">
                            { project.status === 1 
                                ? <>
                                    { project.repoUrl && <a href={project.repoUrl} target="_blank"><button size="sm" className="project-button">Ver código</button></a> }
                                    { project.appUrl && <a href={project.appUrl} target="_blank"><button size="sm" className="project-button">Ver aplicação</button></a> }
                                </>
                                : <span className="project-category mt-1">Temporariamente inativo</span>
                            }
                        </div>
                        <hr className={`positions-separator`}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
