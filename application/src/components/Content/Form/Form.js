import React from 'react';
import './Form.css';

class Form extends React.Component {
    render(){
        return(
            <div className="form">
                <h3>Add ToDo</h3>

                <form>
                    <input id="todoAdd" placeholder="Adicionar Tarefa"/>
                    <button id="btnAddItem">Adicionar</button>
                </form>
            </div>
        );
    }
}

export default Form;
