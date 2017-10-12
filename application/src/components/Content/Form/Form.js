import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            todo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
        this.setState({todo: this.state.value});
    }

    handleSubmit(event){
        alert('ToDo Enviado' + this.state.value)
        event.preventDefault()

        //Before add function to add Item in ToDo List
    }

    render(){
        return(
            <div className="form">
                <h3>Add ToDo</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Adicionar Tarefa"/>
                    <button id="btnAddItem">Adicionar</button>
                </form>

                <h1>{this.state.todo}</h1>
            </div>
        );
    }
}

export default Form;
