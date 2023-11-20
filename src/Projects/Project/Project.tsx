import React, { useState } from "react";
import style from "./Project.module.scss";
import Button from "../../common/styles/button/Button";
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import { IoCaretDownCircle, IoCaretUpCircle } from "react-icons/io5";

type PropsType = {
	text: string,
	img: { backgroundImage: string },
	title: string,
	refs: string,
	description?: string
}

const Project = (props: PropsType) => {
	const [ref, inView] = useInView();
	const slideAnimation = useSpring({
		from: { opacity: 0, transform: "translateY(100%)" },
		to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0%)" : "translateY(100%)" },
	});

	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

	return (
		<div className={style.project} ref={ref}>
			<animated.div style={slideAnimation}>
				<div className={style.projectImg} style={props.img}>
					<Button refs={props.refs} text={props.text} />
				</div>
				<div className={style.projectInfo}>
					<h3 className={style.projectTitle}>{props.title}</h3>
					{isDescriptionExpanded && (
						<span className={style.description}>
                            {props.description}
                        </span>
					)}
					{isDescriptionExpanded ? (
						<IoCaretUpCircle
							className={style.caretIcon}
							onClick={() => setIsDescriptionExpanded(false)}
						/>
					) : (
						<IoCaretDownCircle
							className={style.caretIcon}
							onClick={() => setIsDescriptionExpanded(true)}
						/>
					)}
				</div>
			</animated.div>
		</div>
	);
};

export default Project;
