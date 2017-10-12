import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        // alert('ToDo Enviado' + this.state.value)
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
            </div>
        );
    }
}

export default Form;
