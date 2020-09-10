import React from 'react';

const TodoComponent = (props) => {
    const {allTodos, setAllTodos} = props;
    let todo = {
        name: "",
        isComplete: false
    };

    const changeHandler = e => {
        todo.title = e.target.value;
    }

    const onClickHandler = e => {
        setAllTodos([...allTodos, todo]);
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