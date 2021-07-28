import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';

// declaring the structure of each todo data
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

    // array to store the todo 
    const [todoList, setTodoList] = useState<ITodoData[]>([]);

    const handleSubmit = () => {
        setTodoList([...todoList, todo]);
        setTodo({
            sl: 0,
            heading: "",
            details: ""   
        })
        alert("Successfully Added !");
        console.log(todoList);
    }

    // function to get and set data from the input box
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value,
            sl: Math.floor(Math.random()*1000)  // unique sl number
        });

        console.log("todo: ",todo);
    }

    // function to remove the specific clicked todo from the array
    const handleRemove = (sl: number) => {
        const newTodoList = todoList.filter(data => data.sl !== sl);
        setTodoList(newTodoList);
    }

    return (
        <div className="container">
            <div className="card-create">

                <div className="row">
                    <div className="col-25">
                        <label htmlFor="heading">Topic Name:</label>
                    </div>
                    <div className="col-75">
                        <input 
                            type = "text" 
                            name = "heading"
                            id = "heading"
                            placeholder = "task header here"
                            onChange = {handleOnChange}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                    <label htmlFor="details">Details:</label>
                    </div>
                    <div className="col-75">
                        <textarea 
                            name="details" 
                            id="details" 
                            placeholder = "task details here"
                            onChange = {handleOnChange}
                            cols={30} rows={2}
                        ></textarea>
                    </div>
                </div>

                <input type="submit" onClick={handleSubmit}/>
                
            </div>

            <div className="grid-container">
                {
                    todoList.map((data) => (
                    <TodoCard
                    key={data.sl} 
                    sl={data.sl} 
                    heading={data.heading} 
                    details={data.details}
                    handleRemove={handleRemove}
                    />
                    ))
                }
            </div>

        </div>
    );
};

export default CreateTodo;