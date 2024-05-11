import React, { useState , useEffect} from 'react';
import '../style/todo.css'



export default function TodoList() {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<{ id: number; text: string, done: boolean }[]>([])

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value.trim() !== '') {
            setTodos([...todos, { id: todos.length + 1, text: value, done: false }]);
            setValue("");
        }
    };

    const handleCheckbox = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        }));
    };
    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));

    }
    
    return (

        <div className="container-fluid mt-3">
                
            <div className="inner-container">
                
                <form className="form-layout" onSubmit={handleSubmit}>
                    <label htmlFor="special-input" className="form-label">
                        Add activity
                    </label>
                    <br />
                    <input
                        style= {{width:'40vh'}}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                        id="special-input"
                        className="form-input"
                    />
                    <br />
                    <button className="add-button" type="submit">
                        Add activity
                    </button>
                </form>
                <h1 className="to-do-header">My to-do list </h1>
                <ul className="to-do-list" style={{width:'500vw'}}>
                    {todos.length === 0 && " You have no Todos"}
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => handleCheckbox(todo.id)}
                                />
                                <span>{todo.text} </span>
                            </label>
                            <button
                                className="delete-activity"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}