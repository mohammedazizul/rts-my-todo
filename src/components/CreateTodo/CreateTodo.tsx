import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';

interface ITodoData {
    sl: number,
    heading: string,
    details: string
}

const CreateTodo = () => {

    const [todo, setTodo] = useState<ITodoData>({
        sl: 0,
        heading: "",
        details: ""   
    })

    const [todoList, setTodoList] = useState<ITodoData[]>([]);

    const handleSubmit = () => {
        setTodoList([...todoList, todo]);
        setTodo({
            sl: 0,
            heading: "",
            details: ""   
        })
        alert("Successfully Added!");
        console.log(todoList);
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value,
            sl: Math.floor(Math.random()*1000)
        });

        console.log("todo: ",todo);
    }

    return (
        <div className="container">
            <div className="card-create">
                create
                <div>
                    <label htmlFor="heading">Topic Name: </label>
                    <input 
                        type = "text" 
                        name = "heading"
                        id = "heading"
                        placeholder = "task header here"
                        onChange = {handleOnChange}
                    />

                    <p></p>
                    <label htmlFor="details">Details: </label>
                    <textarea 
                        name="details" 
                        id="details" 
                        placeholder = "task details here"
                        onChange = {handleOnChange}
                        cols={15} rows={2}
                    ></textarea>
                    
                    <p></p>
                    <input type="submit" onClick={handleSubmit}/>
                </div>
            </div>
            <div className="grid-container">
                {
                    todoList.map((data) => (
                    <TodoCard
                    key={data.sl} 
                    sl={data.sl} 
                    heading={data.heading} 
                    details={data.details}
                    />
                    ))
                }
            </div>
        </div>

    );
};

export default CreateTodo;