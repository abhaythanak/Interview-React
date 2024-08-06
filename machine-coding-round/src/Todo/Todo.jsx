import { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const addTodo = (e) => {
        e.preventDefault();
        if (todo.length === 0) {
            alert("Input should not be empty");
        } else {
            if (isEditing) {
                const updatedTodos = todos.map((item, index) =>
                    index === currentIndex ? todo : item
                );
                setTodos(updatedTodos);
                setIsEditing(false);
                setCurrentIndex(null);
            } else {
                setTodos([...todos, todo]);
            }
            setTodo("");
        }
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setTodo(todos[index]);
        setCurrentIndex(index);
    };

    const handleDelete = (index) => {
        const filteredTodos = todos.filter((_, id) => id !== index);
        setTodos(filteredTodos);
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
                    <button type="submit" className="bg-blue-500 p-2 rounded text-white">
                        {isEditing ? "Update" : "Add"}
                    </button>
                </form>
                <div className="w-full max-w-md">
                    {todos.map((text, index) => (
                        <div className="flex justify-between bg-gray-100 mb-2 p-2 rounded" key={index}>
                            <p>{text}</p>
                            <div className="">
                                <button onClick={() => handleEdit(index)} className="bg-slate-500 m-2 p-2">Edit</button>
                                <button onClick={() => handleDelete(index)} className="bg-slate-500 m-2 p-2">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
