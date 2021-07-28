import React from 'react';

interface ITodoDataProps {
    sl: number,
    heading: string,
    details: string
}

const TodoCard = (props : ITodoDataProps) => {

    console.log(props);

    return (
        <div className="card">
            TodoCard
            <p>SL: {props.sl}</p>
            <p>Topic: {props.heading}</p>
            <p>Details: {props.details}</p>
            <button>Remove</button>
        </div>
    );
};

export default TodoCard;