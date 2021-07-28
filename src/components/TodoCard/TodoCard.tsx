import React from 'react';

// declaring the structure of the props
interface ITodoDataProps {
    sl: number,
    heading: string,
    details: string,
    handleRemove: (sl: number) => void
}

const TodoCard = (props : ITodoDataProps) => {
    // console.log(props);

    return (
        <div className="card">

            <div className="row">
                <div className="col-25">
                    <p>SL:</p>
                </div>
                <div className="col-75">
                    <p>{props.sl}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <p>Topic:</p>
                </div>
                <div className="col-75">
                    <p>{props.heading}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <p>Details:</p>
                </div>
                <div className="col-75">
                    <p>{props.details}</p> 
                </div>
            </div>

            <button 
                className="button-remove" 
                onClick={() => props.handleRemove(props.sl)}
                >Remove
            </button>
            
        </div>
    );
};

export default TodoCard;