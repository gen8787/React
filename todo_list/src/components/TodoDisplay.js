import React from 'react';

const TodoDisplay = (props) => {
    const { todo, allToDos, setAllToDos, index } = props;

    const deleteItem = () => {
        setAllToDos(() => {
            return allToDos.filter(todo => allToDos.indexOf(todo) !== index);
        });
    };

    const checkHandler = () => {
        allToDos[index].isComplete = !allToDos[index].isComplete;
        setAllToDos([...allToDos]);
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