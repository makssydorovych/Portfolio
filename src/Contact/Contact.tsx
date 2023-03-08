import React, {useState} from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/Title";
import axios from "axios";
import {animated, useSpring} from '@react-spring/web'
import {useInView} from 'react-intersection-observer';
import Typed from "react-typed"
import {useFormik} from "formik";
import Alert from "./Alert";


type DataType = {
    name?: string,
    email?: string,
    message?: string
}

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [ref, inView] = useInView();
    const slideAnimation = useSpring({
        from: {opacity: 0, transform: "translateY(100%)"},
        to: {opacity: inView ? 1 : 0, transform: inView ? "translateY(0%)" : "translateY(100%)"},

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: DataType = {}
            if (!values.name) {
                errors.name = 'Please enter your name'
            } else if (values.name.length < 3) {
                errors.name = 'Please name should contain at least 3 characters'
            } else if (values.name.length > 50) {
                errors.name = 'Looks like too long name!'
            }
            if (!values.email) {
                errors.email = 'Please enter your email'
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Please enter your message'
            } else if (values.message.length < 5) {
                errors.message = 'More details are always helpful.'
            } else if (values.message.length > 2500) {
                errors.message = 'WOW Too Long!'
            }
            return errors
        },

        onSubmit: (values: DataType) => new Promise<void>(async (resolve, reject) => {
            setIsLoading(true);
            try {
                const response = await axios.post(
                    "https://email-backend-89wkmls6k-makssydorovych.vercel.app/sendMessage",
                    values
                );
                formik.setStatus('success');
                resolve();
            } catch (error) {
                formik.setStatus('error');
                reject();
            } finally {
                setIsLoading(false);
                formik.resetForm();

            }
        }),
    })
    return (
        <div id="contact" className={style.contact}>
            <animated.div style={slideAnimation}>
                <div className={`${styleContainer.container} ${style.contactContainer}`} ref={ref}>
                    <Title title={"Contact"}/>
                    <form className={style.contactForm} onSubmit={formik.handleSubmit}>
                        <input placeholder={"name"}
                               name={"name"}
                               onChange={formik.handleChange}
                               value={formik.values.name}
                               className={isLoading ? style.disabledInput : style.contactInput}
                               disabled={isLoading}/>
                        {formik.errors.name && formik.touched.name ? (
                            <div className={style.error}>{formik.errors.name}</div>
                        ) : null}
                        <input placeholder={"email"}
                               name={"email"}
                               onChange={formik.handleChange}
                               value={formik.values.email}
                               className={isLoading ? style.disabledInput : style.contactInput}
                               disabled={isLoading}
                               type="email"/>
                        {formik.errors.email && formik.touched.email ? (
                            <div className={style.error}>{formik.errors.email}</div>
                        ) : null}
                        <textarea placeholder={"please write your message"}
                                  name={"message"}
                                  onChange={formik.handleChange}
                                  value={formik.values.message}
                                  className={isLoading ? style.disabled : `${style.contactInput} ${style.contactTextArea}`}
                                  disabled={isLoading}/>
                        {formik.errors.message && formik.touched.message ?
                            <div className={style.error}>{formik.errors.message}</div> : null}
                        {isLoading ? (
                            <button type="submit" disabled style={{background: "#4e93e6"}}>
                                <Typed strings={["Sending..."]} typeSpeed={100} backSpeed={150} loop/>
                            </button>
                        ) : (
                            <button type="submit">Send message</button>

                        )} {formik.status === 'success' && (
                        <Alert
                            message={`Thank you: ${formik.values.name}\n Your message sent, I will answer on Email: ${formik.values.email}`}
                        />
                    )} {formik.status === 'error' && (
                        <Alert message="Ooops backend not aviable now. Contact me at maksymsydorovych@gmail.com"/>
                    )}
                    </form>
                </div>
            </animated.div>
        </div>
    );
};

export default Contact;
