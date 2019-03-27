import React from 'react'
import shortid from 'shortid'
import TodoList from './TodoList'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            todos:[]
        }
        this.deleteTodo = (id) =>{
            console.log(id)
            const todos = this.state.todos.filter(todo=>{
                return todo.id !== id
            })
            this.setState({
                todos: todos
            })
        }
        this.addTodo = (todo) =>{
            // todo.id =  Math.floor(Math.random()*1000);
            todo.id =  shortid.generate();
            let todos = [todo,...this.state.todos]
            this.setState({
                todos: todos,
                count: this.state.conunt
            })
        }
        this.toggelComplete = (id) =>{
            this.setState({
                todos: this.state.todos.map(todo =>{
                    if(todo.id === id){
                        return {
                            ...todo,
                            complete: !todo.complete
                        }
                        
                    }else {
                        return todo
                    }
                })
            })
        }

    }


    render() {
        return(
           <div className="to-do-app container">
            <h1 className="center pink-text">待辦事項</h1>
            <TodoList/>
           </div>

        );
    }
}

 export default App;