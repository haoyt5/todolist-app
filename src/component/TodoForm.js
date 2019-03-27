import React from 'react';
import shortid from 'shortid'
class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }

    }
    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
        
    };
    handleSubmit(e){
        e.preventDefault()
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete:false
        })
        this.setState({
            text: ""
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
            <input className="col s10" name="text" value={this.state.text} onChange = {this.handleChange.bind(this)}
                 placeholder="代辦事項..."  />
            <button className="col s2" className="pink btn-small waves-effect waves-light" type="submit" name="action">送出</button>
            </div>
            
            </form>
        )
    }
}
export default TodoForm;