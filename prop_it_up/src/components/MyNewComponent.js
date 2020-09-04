import React, {Component} from 'react'; // <~~ Add Imports

class MyNewComponent extends Component { // Create Class ~~> Same name as filename
    render() {
        const {someText} = this.props; // <~~ can pass info this way
        return (
            <div>
                <h3>{this.props.someText}</h3> {/* <~~ can also pass info this way */}
                <h3>{someText}</h3>
            </div>
        )
    }
}

export default MyNewComponent; // <~~ export component