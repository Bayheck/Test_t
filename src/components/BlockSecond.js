import * as React from 'react';
import '../styles/Block.css';

export const BlockSecond = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={`box`}>
            {props.name}
        </div>
    );
});
