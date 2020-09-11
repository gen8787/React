import React from 'react'

const WordAndColorComponent = (props) => {
    return (
        <div>
            <h1 style={{color:props.textColor, backgroundColor:props.backgroundColor}}>The word is: {props.word}</h1>
        </div>
    )
}

export default WordAndColorComponent
