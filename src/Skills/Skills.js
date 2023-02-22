import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skills";
import { Title } from "../common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
	const html5 = <FontAwesomeIcon icon={faHtml5} />;
	const css = <FontAwesomeIcon icon={faCss3Alt} />;
	const sass = <FontAwesomeIcon icon={faSass} />;
	const react = <FontAwesomeIcon icon={faReact} />;
	const js = <FontAwesomeIcon icon={faJs} />;
	const node = <FontAwesomeIcon icon={faNodeJs} />;
	return (
		<div className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<Title title={"Skills"} />
				<div className={style.skills}>
					<Skill title={"JS"} description={"lorem ispum dolor"} icon={html5} />
					<Skill title={"Css"} description={"lorem ispum dolor"} icon={css} />
					<Skill title={"Sass"} description={"lorem ispum dolor"} icon={sass} />
					<Skill title={"JS"} description={"lorem ispum dolor"} icon={js} />
					<Skill
						title={"React"}
						description={"lorem ispum dolor"}
						icon={react}
					/>
					<Skill
						title={"NodeJs"}
						description={"lorem ispum dolor"}
						icon={node}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
