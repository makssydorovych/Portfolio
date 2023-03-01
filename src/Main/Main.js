import React from "react";
import style from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {ParticlesComponent} from "./Particles.tsx";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-vanilla-tilt'
import ReactTypingEffect from "react-typing-effect"

const Main = () => {

    return (
        <div id="main"className={style.mainBlock}>
            <ParticlesComponent/>

            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi there!</span>
                    <span>Maksym <span>Sydorovych</span></span>
                    <ReactTypingEffect text={"Frond-end developer."} />

                </div>
                <Fade right>
                    <Tilt className="Tilt" options={{max: 35} }style={{padding: 0}}>
                    <div className={style.photo}>
                        <div className={style.image}></div>

                    </div></Tilt>
                </Fade>
            </div>

        </div>
    );
};

export default Main;
