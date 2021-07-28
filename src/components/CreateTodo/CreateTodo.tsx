import React from 'react';

const CreateTodo = () => {

    const handleSubmit = () => {
        alert();
    }

    return (
        <div className="card-create">
            create
            <div>
                <label htmlFor="">Topic Name: </label>
                <input type="text" />

                <p></p>
                <label htmlFor="details">Details: </label>
                <textarea name="" id="details" cols={15} rows={2}></textarea>
                
                <p></p>
                <input type="submit" onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default CreateTodo;