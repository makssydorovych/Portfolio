import React from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Title } from "../common/Title";
import Fade from "react-reveal/Fade";

const Contact = () => {
	return (
		<div id="contact"className={style.contact}>
			<Fade top>
			<div className={`${styleContainer.container} ${style.contactContainer}`}>

					<Title title={"Contact"} />
					<form className={style.contactForm}>
						<input className={style.contactInput}></input>
						<input className={style.contactInput}></input>
						<textarea className={`${style.contactInput} ${style.contactTextArea}`}></textarea>

						<button  type='submit'>
							Send message
						</button>
					</form>

			</div>
				</Fade>
		</div>
	);
};

export default Contact;
