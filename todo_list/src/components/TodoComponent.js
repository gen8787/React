import React from 'react';

const TodoComponent = (props) => {
    const {allToDos, setAllToDos} = props;
    let todo = {
        name: "",
        isComplete: false
    };

    const changeHandler = e => {
        todo.title = e.target.value;
    }

    const onClickHandler = e => {
        setAllToDos([...allToDos, todo]);
        e.target.value = "";
    }

    return (
        <div>
            <input onChange={changeHandler} type="text" name="todo"/>
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}

export default TodoComponent;