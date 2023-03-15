import React, { useEffect, useRef, useState } from 'react';
import '../styles/Button.css';

export default function Button(props) {
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer]);

    const handleClick = () => {
        setIsDisabled(true);
        setTimer(5);
    };
    return (
        <button className={"button"} disabled={isDisabled} onClick={() => {
            handleClick()
            props.onPress()
        }}>
            {timer === 0 ? "Start" : timer}
        </button>
    )
}
