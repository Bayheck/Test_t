import * as React from 'react';
import '../styles/Circle.css';

export default function Circle(props) {
    return (
        <div className={"circle "} style={{
            position: 'absolute',
            top: props.position.initialY + 'px',
            left: props.position.initialX + 'px',
            transform: `translate(${props.position.finalX}px, ${props.position.finalY}px)`,
            transition: 'all 2s ease',
        }}
        >
        </div>
    )
}
