import React from "react";
import style from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "../common/Title";
import styleContainer from "../common/styles/Container.module.css";
import todolist from "../assets/images/todo.jpg";
import hotel from "../assets/images/holidaze.jpg";
import kidsT from "../assets/images/kids-toys.jpg";
import mus from "../assets/images/museum.jpg";

const Projects = () => {
	const museum = {
		backgroundImage: `url(${mus})`,
	};
	const holidaze = {
		backgroundImage: `url(${hotel})`,
	};
	const todo = {
		backgroundImage: `url(${todolist})`,
	};
	const kids = {
		backgroundImage: `url(${kidsT})`,
	};
	return (
		<div id="projects" className={style.projectsBlock}>

			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<Title title={"Projects"} />
				<div className={style.projects}>
					<Project img={todo} title={"Todolist"} text={'view'} description={'Todolist - web-app which helping create todolists with tasks.' +
						' Which you can mark and display completed and active points, add new and delete tasks and todolists.' +
						'Also implemented authentication with remember user.'} refs={'https://makssydorovych.github.io/todoList/'}/>
					<Project img={kids} title={"Title"} text={'view'} refs={'https://makssydorovych.github.io/todoList/'}/>
					<Project img={holidaze} title={"Title"} text={'view'} refs={'https://makssydorovych.github.io/todoList/'}/>
					<Project img={todo} title={"Title"} text={'view'} refs={'https://makssydorovych.github.io/todoList/'}/>
					<Project img={museum} title={"Comunity Sciense Museum"} description={'Comunity Sciense Museum - web site of a local museum aimed at a children\'s audience.' +
						'Website responsive and have few pages.' +
						'Site made using only html/css. '} text={'view'} refs={'https://mellow-rugelach-f45fa8.netlify.app/'}/>
					<Project img={kids} title={"Kids-Toys"} text={'view'}  refs={'https://grand-syrniki-dc20db.netlify.app/'} description={'Kids-Toys: e-commerce website with product cart and admin section, built using html,sass,bootstrap and js.'}/>
				</div>
			</div>

		</div>
	);
};

export default Projects;
