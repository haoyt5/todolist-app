import React from 'react';
export default (props) => (
    <div className="row">
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
                
            }}
            className="u-pointer  col s11 flow-text cyan-text text-accent-4"
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <a onClick={props.onDelete}
                className="col waves-effect  btn-flat  btn-large white "> <i class="material-icons cyan-text text-accent-5">delete</i></a>
    </div>

)