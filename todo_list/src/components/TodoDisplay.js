import React from 'react';

const TodoDisplay = (props) => {
    const { todo, allTodos, setAllTodos, index } = props;

    const deleteItem = () => {
        setAllTodos(() => {
            return allTodos.filter(todo => allTodos.indexOf(todo) !== index);
        });
    };

    const checkHandler = () => {
        allTodos[index].isComplete = !allTodos[index].isComplete;
        setAllTodos([...allTodos]);
    };

    return (
        <div>
        <p style={{textDecoration: todo.isComplete ? 'line-through' : ''}}>{todo.title}</p>
        <input type="checkbox" 
            className="form-check-input" 
            onChange={checkHandler}
            checked={todo.isComplete}
        />
        {
            todo.isComplete ? 
                <button className="btn btn-dark" onClick={deleteItem}>Delete</button> : ''
        }
        </div>
    )
}

export default TodoDisplay;