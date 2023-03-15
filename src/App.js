import React, { useEffect, useRef, useState } from 'react';
import './Application.css';
import { Block } from "./components/Block";
import { BlockSecond } from "./components/BlockSecond";
import Button from "./components/Button";
import Circle from "./components/Circle";


export default function App() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divRef = useRef(null);
    const divSecondRef = useRef(null);

    const handleClick = () => {
        const div = divRef.current;
        const divSecond = divSecondRef.current;
        if (div && divSecond) {
            setPosition({
                initialX: div.getBoundingClientRect().x,
                initialY: div.getBoundingClientRect().y,
                finalX: divSecond.getBoundingClientRect().x,
                finalY: divSecond.getBoundingClientRect().y - divSecond.getBoundingClientRect().height / 2,
            });
        }
    };

    return (
        <div className={"main"}>
            <div className={"rect"}>
                <Block name={"1"} ref={divRef} />
                {/*{isAnimating && */}
                <Circle position={position} setIsAnimating={setIsAnimating}/>
                {/*}*/}
                <BlockSecond name={"2"} ref={divSecondRef}/>
            </div>
            <Button onPress={() => {
                setIsAnimating(true);
                handleClick();
            }} />
        </div>
    )
}
