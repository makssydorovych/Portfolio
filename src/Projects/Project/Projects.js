import React from "react";
import style from "./Project.module.scss";
import Button from "../../common/styles/button/Button";

const Project = props => {
	return (
		<div className={style.project}>
			<div className={style.projectImg} style={props.style}>

				<Button text={props.text}/>
			</div>
			<div className={style.projectInfo}>
				{" "}
				<h3 className={style.projectTitle}>{props.title}</h3>
				<span className={style.description}>
					lorem lorem loremlorem lorem loremvlorem loremv loremlorem lorem
					loremloremloremv vlorem
				</span>
			</div>
		</div>
	);
};

export default Project;
