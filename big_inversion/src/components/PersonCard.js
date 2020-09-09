import React from 'react'; // <~~ Add Imports

const PersonCard = props => {
    return(
        <div>
            <h3>{ props.lastName }, { props.firstName }</h3>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <hr/>
        </div>
    );
}

export default PersonCard; // <~~ export component