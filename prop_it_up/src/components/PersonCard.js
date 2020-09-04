import React, {Component} from 'react'; // <~~ Add Imports

class PersonCard extends Component { // Create Class ~~> Same name as filename
    render() {
        const {firstName, lastName, age, hairColor} = this.props; // <~~ can pass info this way
        return (
            <div>
                <h3>{this.props.lastName}, {this.props.firstName}</h3> {/* <~~ can also pass info this way */}
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <hr/>
            </div>
        )
    }
}

export default PersonCard; // <~~ export component