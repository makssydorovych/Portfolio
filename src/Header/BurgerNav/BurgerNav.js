import React, {useState} from "react";
import style from "./BurgerNav.module.scss";
import {Link} from 'react-scroll'

const BurgerNav = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerClick = () => {
		setMenuIsOpen (!menuIsOpen);
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link activeClass={style.active} to='main' spy={true} smooth={true} offset={50} duration={500} >
                    Main
                </Link>
                <Link activeClass={style.active} to='skills' spy={true} smooth={true} offset={-50} duration={500} >
                    Skills
                </Link>
                <Link activeClass={style.active} to='projects' spy={true} smooth={true} offset={-50} duration={500} >
                    Projects
                </Link>

                <Link activeClass={style.active} to='contact' spy={true} smooth={true} offset={-50} duration={500} >
                    Contact
                </Link>
            </div>
            <div onClick={onBurgerClick} className={menuIsOpen? `${style.burgerBtn} ${style.burgerBtnOpen} `:style.burgerBtn}>
                <span className={style.line}></span><span className={style.line}></span><span className={style.line}></span>
            </div>
        </div>
    );
};

export default BurgerNav;
