import React, {Component} from 'react'; // <~~ Add Imports

class PersonCard extends Component { // Create Class ~~> Same name as filename
    constructor(props) { // <~~ add in constructor, super, and state
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    
    addBday = () => this.setState({age: this.state.age + 1});

    // addBday = () => {
    //     this.setState({age: this.state.age + 1});
    // }

    render() {
        const {firstName, lastName, hairColor} = this.props; // <~~ can pass info this way
        const {age} = this.state;
        return (
            <div>
                <h3>{this.props.lastName}, {this.props.firstName}</h3> {/* <~~ can also pass info this way */}
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ this.addBday }>Birthday Button for {firstName} {lastName}</button> {/* <~~ calling a method */}
                <button onClick={ () => {this.setState({age: this.state.age + 1})}}>Add Year This Way</button> {/* <~~ using arrow func*/}
                <hr/>
            </div>
        )
    }
}

export default PersonCard; // <~~ export component