import React, {useState} from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/Title";
import Fade from "react-reveal/Fade";
import axios from "axios";

const Contact = () => {
    const [data, setData] = useState({})
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value.toString()
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://email-backend-89wkmls6k-makssydorovych.vercel.app/sendMessage', data);

            alert(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
        } catch (error) {
            console.log(error);
        }finally {
            alert(`Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
        }
    };

    return (
        <div id="contact" className={style.contact}>
            <Fade top>
                <div className={`${styleContainer.container} ${style.contactContainer}`}>

                    <Title title={"Contact"}/>
                    <form className={style.contactForm}>
                        <input placeholder={"name"} name={"name"} onChange={updateData}
                               className={style.contactInput}></input>
                        <input placeholder={"email"} name={"email"} onChange={updateData}
                               className={style.contactInput}></input>
                        <textarea placeholder={"please write your message"} onChange={updateData} name={"message"}
                                  className={`${style.contactInput} ${style.contactTextArea}`}></textarea>

                        <button onClick={onSubmit} type='submit'>
                            Send message
                        </button>
                    </form>

                </div>
            </Fade>
        </div>
    );
};

export default Contact;
