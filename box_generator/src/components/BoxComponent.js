import React from 'react';

const BoxComponent = (props) => {
    const { color } = props;

    return (
        <div style={{background: color, height: '100px', width: '100px', margin: '5px', display: 'inline-block', border: '1px solid black'}}>
            <p style={{padding: '25px'}}>{color}</p>
        </div>
        );
}

export default BoxComponent;