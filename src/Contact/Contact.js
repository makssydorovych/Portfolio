import React from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Title } from "../common/Title";

const Contact = () => {
	return (
		<div className={style.contact}>
			<div className={`${styleContainer.container} ${style.contactContainer}`}>
				<div className={style.contactBlock}>
					<Title title={"Contact"} />
					<form className={style.contactForm}>
						<input className={style.contactInput}></input>
						<input className={style.contactInput}></input>
						<textarea className={style.contactInput}></textarea>

						<button className={style.contactButton} type='submit'>
							Send message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
