import React from 'react'
import NumberComponent from './NumberComponent';

const WordComponent = (props) => {
    return (
        <>
        {
            isNaN(props.word) ?
            <div>
                <h1>The word is: {props.word}</h1>
            </div>
            :
            <NumberComponent num={props.word} />
        }
        </>
    )
}

export default WordComponent
