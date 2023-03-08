import React, { useState, useEffect } from 'react';
import style from "./Alert.module.scss";

type PropsType ={
    message: string
}

const Alert = (props: PropsType) => {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [showAlert]);

    return (
        <>
            {showAlert && (
                <div className={style.alert}>
                    <p>{props.message}</p>
                </div>
            )}
        </>
    );
};

export default Alert;
