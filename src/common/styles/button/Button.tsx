import React from "react";
import style from './Button.module.scss';

type PropsType = {
    text: string,
    refs: string
}

const Button = (props: PropsType) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.open(props.refs, "_blank");
    }

    return (
        <a href={props.refs} className={style.btn} onClick={handleClick}>{props.text}</a>
    );
};

export default Button;
