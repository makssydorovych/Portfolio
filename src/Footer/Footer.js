import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={`${styleContainer.container} ${style.footerContainer}`}>
				<h3 className={style.footerTitle}>Maksym Sydorovych</h3>
				<div className={style.footerItems}>
					<a className={style.footerItem} href='#'>
						GitHub
					</a>
					<a className={style.footerItem} href='#'>
						Linkedin
					</a>
					<a className={style.footerItem} href='#'>
						Facebook
					</a>
					<a className={style.footerItem} href='#'>
						Telegramm
					</a>
				</div>
				<span className={style.copyright}>© 2023 all rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
