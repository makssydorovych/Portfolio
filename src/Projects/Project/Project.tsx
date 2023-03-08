import React from "react";
import style from "./Project.module.scss";
import Button from "../../common/styles/button/Button";
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
type PropsType ={
	text: string,
	img: { backgroundImage: string},
	title: string
}
const Project = (props :PropsType)=> {
	const [ref, inView] = useInView();
	const slideAnimation = useSpring({
		from: {opacity: 0, transform: "translateY(100%)"},
		to: {opacity: inView ? 1 : 0, transform: inView ? "translateY(0%)" : "translateY(100%)"},
	});
	return (
		<div className={style.project} ref={ref}>
			<animated.div style={slideAnimation}>
			<div className={style.projectImg} style={props.img}>

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
			</animated.div>
		</div>
	);
};

export default Project;
