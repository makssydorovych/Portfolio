import React from "react";
import style from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "../common/Title";
import styleContainer from "../common/styles/Container.module.css";
import todolist from "../assets/images/todo.jpg";
import holidaze from "../assets/images/holidaze.jpg";
import kidsT from "../assets/images/kids-toys.jpg";


const Projects = () => {

	const holidaze = {
		backgroundImage: `url(${todolist})`,
	};
	const todo = {
		backgroundImage: `url(${holidaze})`,
	};
	const kids = {
		backgroundImage: `url(${kidsT})`,
	};
	return (
		<div id="projects" className={style.projectsBlock}>

			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<Title title={"Projects"} />
				<div className={style.projects}>
					<Project img={todo} title={"Title"} text={'view'}/>
					<Project img={kids} title={"Title"} text={'view'}/>
					<Project img={holidaze} title={"Title"} text={'view'}/>
					<Project img={todo} title={"Title"} text={'view'}/>
					<Project img={holidaze} title={"Title"} text={'view'}/>
					<Project img={kids} title={"Title"} text={'view'}/>
				</div>
			</div>

		</div>
	);
};

export default Projects;
