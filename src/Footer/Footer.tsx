import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<h3 className={style.footerTitle}>Maksym Sydorovych</h3>
				<div className={style.footerItems}>
					<a className={style.footerItem} href='https://github.com/makssydorovych'>
						GitHub
					</a>
					<a className={style.footerItem} href='https://www.linkedin.com/in/maksym-sydorovych-4571161a2/'>
						Linkedin
					</a>
					<a className={style.footerItem} href='https://www.codewars.com/users/Makssydorovych'>
						Codewars
					</a>
					<a className={style.footerItem} href='https://t.me/MaksymSyd'>
						Telegramm
					</a>
				</div>
				<span className={style.copyright}>© 2023 all rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
