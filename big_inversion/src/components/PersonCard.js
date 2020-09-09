import React, { useState } from 'react'; // <~~ Add Imports

const PersonCard = props => {

    const [state, setState] = useState({
        age: props.age
    })

    const ageHandler = e => {
        console.log(state)
        setState({
            age: state.age + 1
        })
    }

    return(
        <div>
            <h3>{ props.lastName }, { props.firstName }</h3>
            <p>Age: { state.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ageHandler}>Add Year</button>
            <hr/>
        </div>
    );
}

export default PersonCard; // <~~ export component