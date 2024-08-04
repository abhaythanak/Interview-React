import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    console.log(todos)

    const addTodo = (e) => {
        e.preventDefault();

            setTodos([...todos, todo]);
            setTodo("");
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="mb-4 font-bold text-2xl">TODO LIST</h1>
                <form onSubmit={addTodo} className="flex space-x-2 mb-4">
                    <input 
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)} 
                        type="text" 
                        placeholder="Enter Todo" 
                        className="p-2 border rounded"
                    />
                    <button type="submit" className="bg-blue-500 p-2 rounded text-white">Add</button>
                </form>
                <div className="w-full max-w-md">
                    {todos.map((text, i) => (
                        <div className="bg-gray-100 mb-2 p-2 rounded" key={i}>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
