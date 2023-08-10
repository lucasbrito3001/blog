import { Badge, Col, Container, Row } from "react-bootstrap";

import { getCareer } from "../../../services/portfolio/career";
import { useEffect, useState } from "react";

import "./styles.scss";

import CV from "../../../assets/files/cv.pdf";

import { Fade } from "react-awesome-reveal";
import { getAcademical } from "../../../services/portfolio/academical";

export default function Career() {
	const [career, setCareer] = useState([]);
	const [academical, setAcademical] = useState([]);

	useEffect(() => {
		async function getCareerOnLoad() {
			const career = await getCareer();
			const academical = await getAcademical();

			setCareer(career.content);
			setAcademical(academical.content);
		}

		getCareerOnLoad();
	}, []);

	return (
		<Container>
			<Row className="py-lg-5 py-4 career-section">
				<Col
					className="pb-3 pe-lg-5 mb-4 mb-lg-0 career-section-career text-start text-lg-end"
					xs={12}
					lg={6}
				>
					<div className="mb-4">
						<h1 className="sections-title">xp. profissional</h1>
					</div>

					<ul className="career-list">
						{career.length > 0 &&
							career.map((enterprise, idxEnterprise) => {
								return (
									<div key={`enterprise-${idxEnterprise}`}>
										<li className="ps-0 ps-lg-4">
											<div>
												<header className="mb-1">
													<h1 className="enterprise-name mb-0">
														{enterprise.name}
													</h1>
													<span className="text-muted">{enterprise.place}</span>
												</header>
												<main>
													{/* <Fade cascade> */}
													<ul>
														{enterprise.positions.map(
															(position, idxPosition) => (
																<li
																	key={`enterprise-${idxEnterprise}-position-${idxPosition}`}
																	className={
																		idxPosition <
																		enterprise.positions.length - 1
																			? "pb-4"
																			: ""
																	}
																>
																	<div>
																		<h2 className="positions-name">
																			{position.name}
																		</h2>
																		<span className="positions-date">
																			{position.time}
																		</span>
																		<p className="mb-1 sections-text career-description">
																			{position.description}
																		</p>
																		<ul className="w-100 d-flex flex-wrap justify-content-end">
                                                                            <li className="projects-stacks-separator">&gt;</li>
																			{position.technologies.map(
																				(tech, idxTech) => (
																					<li className="d-flex justify-content-between align-items-center">
                                                                                        <span className="projects-stacks-separator">&lt;</span>
																						<small className="mx-1">{tech}</small>{" "}
																						<span className="projects-stacks-separator">&gt;</span>
																					</li>
																				)
																			)}
                                                                            <li className="projects-stacks-separator">&lt;</li>
																		</ul>
																	</div>
																</li>
															)
														)}
													</ul>
													{/* </Fade> */}
												</main>
											</div>
										</li>
										{idxEnterprise < career.length - 1 && (
											<hr
												className={`${
													idxEnterprise < career.length - 1 ? "my-4" : ""
												} positions-separator`}
											/>
										)}
									</div>
								);
							})}
					</ul>
				</Col>
				<Col
					xs={12}
					lg={6}
					className="career-section-academical text-start px-3 ps-lg-5 mt-3 mt-lg-0"
				>
					<div className="mb-4">
						<h1 className="sections-title">xp. acadêmica</h1>
					</div>
					{/* <Fade cascade> */}
					<ul className="career-list">
						{academical.length > 0 &&
							academical.map((course, idx) => {
								return (
									<div key={`course-${idx}`}>
										<li>
											<div>
												<h1 className="enterprise-name mb-0">{course.name}</h1>
												<span className="text-muted">{course.place}</span>
												<h2 className="course-name">{course.institution}</h2>
												<span className="positions-date">{course.date}</span>
												{course.description.map((paragraph, idxParagraph) => (
													<p
														key={`paragraph-${idxParagraph}`}
														className="career-description sections-text m-0"
													>
														{paragraph}
													</p>
												))}
											</div>
										</li>
										{idx < academical.length - 1 && (
											<hr
												className={`${
													idx < career.length - 1 ? "my-4" : ""
												} positions-separator`}
											/>
										)}
									</div>
								);
							})}
					</ul>
					{/* </Fade> */}
				</Col>
				<Col xs={6}></Col>
				<Col xs={6} className="dashed-separator mt-4 mt-lg-2"></Col>
				<Col
					xs={12}
					className="mt-4 mt-lg-2 d-flex justify-content-center align-center"
				>
					<a href={CV} download="Lucas de Brito - Full Stack - CV">
						<button className="project-button career-button">
							Baixar currículo <span className="ms-1">&darr;</span>
						</button>
					</a>
				</Col>
			</Row>
		</Container>
	);
}
