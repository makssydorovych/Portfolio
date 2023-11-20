import React from "react";
import style from "./Projects.module.scss";
import Project from "./Project/Project";
import { Title } from "../common/Title";
import styleContainer from "../common/styles/Container.module.css";
import todolist from "../assets/images/todo.jpg";
import hotel from "../assets/images/holidaze.jpg";
import kidsT from "../assets/images/kids-toys.jpg";
import mus from "../assets/images/museum.jpg";
import flashcards from '../assets/images/flashcards.jpg'
import storybook from '../assets/images/storybook.jpg'

const projectData = [
	{
		title: "Flashcards",
		img: { backgroundImage: `url(${flashcards})` },
		text: "view",
		refs: "https://flash-cards-liard.vercel.app/login",
		description:
			"Todolist - web-app which helping create todolists with tasks. Which you can mark and display completed and active points, add new and delete tasks and todolists. Also implemented authentication with remember user.",
	},
	{
		title: "Todolist",
		img: { backgroundImage: `url(${todolist})` },
		text: "view",
		refs: "https://makssydorovych.github.io/todoList/",
		description:
			"Todolist - web-app which helping create todolists with tasks. Which you can mark and display completed and active points, add new and delete tasks and todolists. Also implemented authentication with remember user.",
	},
	{
		title: "Storybook",
		img: { backgroundImage: `url(${storybook})` },
		text: "view",
		refs: "https://storybook-deploy-flash-cards-liard.vercel.app/?path=/docs/components-button--docs",
		description:
			"Todolist - web-app which helping create todolists with tasks. Which you can mark and display completed and active points, add new and delete tasks and todolists. Also implemented authentication with remember user.",
	},
	{
		title: "Social network",
		img: { backgroundImage: "url(https://res.cloudinary.com/dkombzxne/image/upload/v1681205473/Social-network_slw3ed.png)" },
		text: "view",
		refs: "https://makssydorovych.github.io/social-network/",
		description:
			"Social network - web app with authentication, profile page, posts, audio player, chat. Built with React, Typescript, Redux, Redux thunk, Formik, Mui also using some class components and HOCs",
	},
	{
		title: "Holidayz",
		img: { backgroundImage: `url(${hotel})` },
		text: "view",
		refs: "https://makssydorovych.github.io/updated_for_portf/",
		description: "Holidayz - is a fictional company which displays a number of different establishments in Bergen, Norway. Website built with React.Js/Sass",
	},
	{
		title: "Comunity Sciense Museum",
		img: { backgroundImage: `url(${mus})` },
		text: "view",
		refs: "https://mellow-rugelach-f45fa8.netlify.app/",
		description:
			"Comunity Sciense Museum - web site of a local museum aimed at a children's audience. Website responsive and have few pages. Site made using only html/css.",
	},
	{
		title: "Kids-Toys",
		img: { backgroundImage: `url(${kidsT})` },
		text: "view",
		refs: "https://grand-syrniki-dc20db.netlify.app/",
		description: "Kids-Toys: e-commerce website with product cart and admin section, built using html, sass, bootstrap and js.",
	},
];

const Projects = () => {
	return (
		<div id="projects" className={style.projectsBlock}>
			<div className={`${styleContainer.container} ${style.projectsContainer}`}>
				<Title title={"Projects"} />
				<div className={style.projects}>
					{projectData.map((project, index) => (
						<Project
							key={index}
							img={project.img}
							title={project.title}
							text={project.text}
							refs={project.refs}
							description={project.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
