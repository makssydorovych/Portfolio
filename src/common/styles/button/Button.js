import React from "react";
import style from './Button.module.scss';

const Button = (props) => {
    return (
        <a href="" className={style.btn}>{props.text}</a>
    );
};

export default Button;