import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import {Title} from "../common/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faSass} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

const Skills = () => {
    const html5 = <FontAwesomeIcon icon={faHtml5}/>;
    const css = <FontAwesomeIcon icon={faCss3Alt}/>;
    const sass = <FontAwesomeIcon icon={faSass}/>;
    const react = <FontAwesomeIcon icon={faReact}/>;
    const js = <FontAwesomeIcon icon={faJs}/>;
    const node = <FontAwesomeIcon icon={faNodeJs}/>;
    const bootstrap = <FontAwesomeIcon icon={faBootstrap}/>
    const git = <FontAwesomeIcon icon={faGithub}/>
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"React / Redux"} icon={react}/>
                    <Skill title={"JS / TS1"} icon={js}/>
                    <Skill title={"Css / MaterialUI"} icon={css}/>
                    <Skill title={"Html5"} icon={html5}/>
                    <Skill title={"Sass"} icon={sass}/>
                    <Skill title={"Git"} icon={git}/>
                    <Skill title={"NodeJs"} icon={node}/>
                    <Skill title={"Bootstrap"} icon={bootstrap}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
