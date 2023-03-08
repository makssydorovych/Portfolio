import React from "react";
import style from "./Skill.module.scss";
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

type PropsType ={
	icon: any,
	title: string
}

const Skill = (props: PropsType )=> {
	const [ref, inView] = useInView();
	const slideAnimation = useSpring({
		from: {opacity: 0, transform: "translateY(100%)"},
		to: {opacity: inView ? 1 : 0, transform: inView ? "translateY(0%)" : "translateY(100%)"},
	});


	return (
		<div className={style.skill} ref={ref}>
			<animated.div style={slideAnimation}>
				<div className={style.iconBox}>
					<div className={style.icon}>{props.icon}</div>
				</div>
				<h3 className={style.title}>{props.title}</h3>
			</animated.div>
		</div>
	);
};

export default Skill;
