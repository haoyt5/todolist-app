import React from 'react';
export default (props) => (
    <div className="row">
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
                
            }}
            className="u-pointer pink-text col s11"
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <button onClick={props.onDelete}
                className="col btn-small cyan darken-4 ">Ｘ</button>
    </div>

)