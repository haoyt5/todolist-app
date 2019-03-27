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
                <div className="col s8 flow-text light-blue-text text-darken-2">
                 {this.state.todos.filter(todo => !todo.complete).length} pendind tasks
                </div>
                {this.state.todos.some(todo=>todo.complete) ? (
                    <div className="col s4 center">
                    <a onClick={this.removeAllTodosThatAreComplete.bind(this)} className="waves-effect  btn-flat  btn-small  ">complete<i class="material-icons right cyan-text text-darken-4">clear_all</i></a>
                    </div>
                ):null}
                
                
                
            </div>
            <div className="row">
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('all')} className="grey lighten-5 cyan-text text-accent-3   waves-effect waves-light btn-flat ">ALL</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('active')} className="grey lighten-5 cyan-text text-accent-4 waves-effect waves-light btn-flat">ACTIVE</button>
                </div>
                <div className="col s3 center">
                <button onClick={()=>this.updateTodoToShow('complete')} className="grey lighten-5 cyan-text text-darken-2 waves-effect waves-light btn-flat">COMPLETE</button>
                </div>
                <div className="col s3">
                    <button onClick={()=>this.setState({
                        todos: this.state.todos.map(todo =>({
                                    ... todo,
                                    complete: this.state.toggleAllComplete
                                })),
                        toggleAllComplete: !this.state.toggleAllComplete
                    })}
                            className="grey lighten-5 cyan-text text-darken-4 waves-effect waves-light btn-flat">Complete all : {`${this.state.toggleAllComplete}`}</button>
                    </div>
            </div>
            
            {/* {JSON.stringify(this.state.todos)} */}
            <div className="collection">
            {todos.map(todo =>(
                
                <Todo key={todo.id} 
                      todo={todo}
                      onDelete={()=>this.handleDeleteTodo(todo.id)}
                      toggleComplete={()=>this.toggleComplete(todo.id)} />
            ))}
            </div>

            </div>
            
        ); 
    }
}