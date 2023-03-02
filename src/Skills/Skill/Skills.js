import React from "react";
import style from "./Skill.module.scss";
import Fade from "react-reveal/Fade";

const Skill = props => {
	return (
		<div className={style.skill}>
			<Fade top>
			<div className={style.iconBox}>
				<div className={style.icon}>{props.icon}</div>
			</div>
			<h3 className={style.title}>{props.title}</h3>

			</Fade>
		</div>

	);
};

export default Skill;
