import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[],
            todoToShow: "all",
            toggleAllComplete: true
        }

    }
    addTodo (todo){
        this.setState({
            todos:[todo,...this.state.todos]
        });
        console.log(this.state)
    }
    toggleComplete(id){
        this.setState({
            todos: this.state.todos.map(todo =>{
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo
                }
            })
        })

    }
    updateTodoToShow (string){
        this.setState({
            todoToShow: string
        })
    }
    handleDeleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !=id )
        })
    }
    removeAllTodosThatAreComplete(id){
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete )
        })
    }
    render() {
        let todos =[];
        if (this.state.todoToShow === 'all'){
            todos = this.state.todos
        } else if(this.state.todoToShow === 'active'){
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if(this.state.todoToShow === 'complete'){
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return(
            <div className="container">          
            <TodoForm onSubmit={this.addTodo.bind(this)}/>
            <div className="teal-text row">
                <div className="col s9 flow-text">
                To Dos Left： {this.state.todos.filter(todo => !todo.complete).length} 
                </div>
                {this.state.todos.some(todo=>todo.complete) ? (
                    <div className="col s3 center">
                    <a onClick={this.removeAllTodosThatAreComplete.bind(this)} className="btn-floating btn-large waves-effect waves-light "><i class="material-icons">delete_sweep</i></a>
                    </div>
                ):null}
                
                
                
            </div>
            <div className="row">
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('all')} className="teal accent-4 lighten-2  waves-effect waves-light btn-small ">ALL</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('active')} className="teal accent-4 lighten-2 waves-effect waves-light btn-small">ACTIVE</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('complete')} className="teal accent-4 waves-effect waves-light btn-small">COMPLETE</button>
                </div>
                <div className="col s3">
                    <button onClick={()=>this.setState({
                        todos: this.state.todos.map(todo =>({
                                    ... todo,
                                    complete: this.state.toggleAllComplete
                                })),
                        toggleAllComplete: !this.state.toggleAllComplete
                    })}
                            className="teal accent-4 lighten-2  waves-effect waves-light btn-small">All DONE: {`${this.state.toggleAllComplete}`}</button>
                    </div>
            </div>

            {/* {JSON.stringify(this.state.todos)} */}
            {todos.map(todo =>(
                
                <Todo key={todo.id} 
                      todo={todo}
                      onDelete={()=>this.handleDeleteTodo(todo.id)}
                      toggleComplete={()=>this.toggleComplete(todo.id)} />
            ))}
            </div>
            
        ); 
    }
}