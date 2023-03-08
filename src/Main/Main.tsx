import {ParticlesComponent} from "./Particles";
import React, {useState} from "react";
import style from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import ReactTypingEffect from "react-typing-effect";
import {useSpring, animated} from "@react-spring/web";
import {useGesture} from "react-use-gesture";
import {interpolate} from "@react-spring/web";

const Main = () => {
    const [hovered, setHovered] = useState(false);
    const [{x, y, z}, set] = useSpring(() => ({
        x: 0,
        y: 0,
        z: 1,

    }));

    const bind = useGesture({
        onMove: ({xy}) => {
            const newX = (xy[0] - window.innerWidth / 2) / 50;
            const newY = (xy[1] - window.innerHeight / 2) / 50;
            set({x: newX, y: newY, z: hovered ? 1.2 : 1});
        },
        onMouseEnter: () => {
            setHovered(true);
        },
        onMouseLeave: () => {
            setHovered(false);
            set({x: 0, y: 0, z: 1});
        },
    });

    const slideInAnimation = useSpring({
        from: {opacity: 0, transform: "translateX(-100%)"},
        to: {opacity: 1, transform: "translateX(0%)"},
    });

    const slideUpAnimation = useSpring({
        from: {opacity: 0, transform: "translateY(100%)"},
        to: {opacity: 1, transform: "translateY(0%)"},
    });

    return (
        <div id="main" className={style.mainBlock}>
            <ParticlesComponent/>

            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <animated.div style={slideInAnimation}>
                    <div className={style.text}>
                        <span>Hi there! I am</span>
                        <span>Maksym <span>Sydorovych</span>
            </span>
                        <ReactTypingEffect text={"Frond-end developer."}/>
                    </div>
                </animated.div>

                <animated.div style={slideUpAnimation}>
                    <div
                        {...bind()}
                        className={style.photo}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <animated.div
                            style={{
                                transform: interpolate(
                                    [x, y, z],
                                    (x, y, s) =>
                                        `perspective(600px) rotateX(${y}deg) rotateY(${-x}deg) scale(${s})`
                                ),
                            }}
                        >
                            <div className={style.image}></div>
                        </animated.div>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Main;
