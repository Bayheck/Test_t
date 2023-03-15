import * as React from 'react';
import '../styles/Block.css';

export const Block = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={`box constant-animation`}>
            {props.name}
        </div>
    );
});
