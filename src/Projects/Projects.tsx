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
			"Flashcards is a dynamic web app for creating and studying from custom flashcard decks. It features user authentication, deck management, advanced filtering, and a study system. Built with React, TypeScript, SCSS, and Redux with RTK Query, it emphasizes a seamless UX with a secure backend. The project showcases effective team collaboration using Trello and standardized coding practices, ensuring code quality and maintainability.",
	},
	{
		title: "Todolist",
		img: { backgroundImage: `url(${todolist})` },
		text: "view",
		refs: "https://makssydorovych.github.io/todoList/",
		description:
			"Todolist is a feature-rich, interactive web application designed to enhance personal productivity. Users can create multiple todolists, add tasks, and toggle between active and completed items for better task management. The app includes user authentication with a 'remember me' feature for a personalized experience. Developed solo using React with TypeScript, Redux Toolkit for state management, Formik for form handling, and styled using Material UI, this project showcases my ability to create intuitive, user-friendly interfaces with a focus on functionality and design aesthetics.",
	},

	{
		title: "ComponentsLib",
		img: { backgroundImage: `url(${storybook})` },
		text: "view",
		refs: "https://storybook-deploy-flash-cards-liard.vercel.app/?path=/docs/components-button--docs",
		description:
			"ComponentsLib is a comprehensive library of universal, polymorphic components created for efficient reuse across multiple projects. Our team developed this library to streamline the development process, ensuring consistency and scalability in our web applications. The project involves headless components, leveraging Radix UI for enhanced functionality and customization. Managed using Jira and deployed through Storybook, this initiative showcases our commitment to modular design principles and collaborative development. It serves as a foundational asset for future projects, demonstrating robustness in both design and implementation.",
	},

	{
		title: "Social Network",
		img: { backgroundImage: "url(https://res.cloudinary.com/dkombzxne/image/upload/v1681205473/Social-network_slw3ed.png)" },
		text: "view",
		refs: "https://makssydorovych.github.io/social-network/",
		description:
			"Social Network is a robust web application offering a comprehensive social media experience. Originally developed with legacy React code, I undertook the challenge of modernizing it using current React standards and integrating TypeScript for enhanced code reliability. This extensive project, completed solo, features user authentication, a personalized profile page, interactive posts, an audio player, and a chat system. Key implementations include Redux with Thunks for state management, Formik for form validation, and a mix of class components and HOCs. Additionally, I integrated a music and video player, elevating the user experience. This project exemplifies my ability to refactor and upgrade existing applications while introducing new features and maintaining a focus on user engagement and interactive design.",
	},

	{
		title: "Holidayz",
		img: { backgroundImage: `url(${hotel})` },
		text: "view",
		refs: "https://makssydorovych.github.io/updated_for_portf/",
		description:
			"Holidayz is a bespoke web application showcasing various establishments in Bergen, Norway, for a fictional company. This project, which I developed from scratch, involved crafting the UI design, creating technical specifications, and implementing the website. Built using React.js and Sass, the site features detailed pages for each establishment, a messaging section for inquiries, a booking system, and an admin page for management purposes. This project demonstrates my comprehensive skills in web development, from conceptual design and planning to the execution of a fully functional web application. My focus on user experience and seamless functionality is evident in Holidayz's intuitive interface and efficient navigation.",
	},

	{
		title: "Community Science Museum",
		img: { backgroundImage: `url(${mus})` },
		text: "view",
		refs: "https://mellow-rugelach-f45fa8.netlify.app/",
		description:
			"The Community Science Museum website is my inaugural study project, crafted to engage a young audience with a local museum's offerings. This project is built using native HTML, CSS, and a touch of JavaScript, showcasing my foundational skills in web development. The website is responsive, ensuring a seamless experience across various devices, and features multiple pages including interactive elements suited for children. This project was an excellent opportunity to apply basic web development principles in a practical setting, focusing on user-friendly design and intuitive navigation, tailored specifically for a younger demographic.",
	},

	{
		title: "Kids-Toys",
		img: { backgroundImage: `url(${kidsT})` },
		text: "view",
		refs: "https://grand-syrniki-dc20db.netlify.app/",
		description:
			"Kids-Toys is a dynamic e-commerce website I built from scratch, designed to provide a seamless shopping experience for children's toys. Utilizing native JavaScript, Bootstrap, and Sass, the site boasts a user-friendly interface and responsive design. Key features include a comprehensive product page, an intuitive search function, and a shopping cart system for easy management of purchases. An admin panel is integrated for effective site management, showcasing my ability to implement essential e-commerce functionalities. This project highlights my skills in creating engaging and functional web applications using foundational web technologies, with a focus on user-centric design and efficient navigation.",
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
