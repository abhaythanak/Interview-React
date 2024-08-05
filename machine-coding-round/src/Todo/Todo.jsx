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

    const handleDelete = (i)=>{
        const Filter = todos.filter((_,id)=> id !== i)
        setTodos(Filter)
    }

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
                        <div className="flex justify-between bg-gray-100 mb-2 p-2 rounded just just just just" key={i}>
                            <p>{text}</p>
                            <button onClick={()=> handleDelete(i)} className='bg-slate-500 m-2 p-2' >x</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
