import React from  'react'; // <~~ Add Imports
    
    
const BoxForm = (props) => {
    const {color, setColor, formSubmit} = props;

    const getColor = e => {
        e.preventDefault();
        setColor(e.target.value);
        formSubmit();

    }
    
    return(
        <form onSubmit = { getColor }>
            <div>
                <label htmlFor="color">Color: </label> 
                <input type="text" name="color" onChange={ e => setColor(e.target.value) } value={color} placeholder="Enter a color"/>
                <input type="submit" value="Add" style={{marginLeft: '10px'}}/>
            </div>
        </form>
    );
};
    
export default BoxForm; // <~~ export component