import React from "react";
import style from "./Projects.module.scss";

const Project = props => {
	return (
		<div className={style.project}>
			<div className={style.projectImg} style={props.style}>
				<a className={style.viewBtn} href='†'>
					View
				</a>
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
