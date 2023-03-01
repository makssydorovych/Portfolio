import React from "react";
import style from "./Projects.module.scss";
import Project from "./Project/Projects";
import { Title } from "../common/Title";
import styleContainer from "../common/styles/Container.module.css";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";

const Projects = () => {
	const social = {
		backgroundImage: `url(${one})`,
	};
	const todo = {
		backgroundImage: `url(${two})`,
	};
	const counter = {
		backgroundImage: `url(${three})`,
	};
	return (
		<div className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<Title title={"Projects"} />
				<div className={style.projects}>
					<Project style={social} title={"Title"} text={'view'}/>
					<Project style={todo} title={"Title"} text={'view'}/>
					<Project style={counter} title={"Title"} text={'view'}/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
