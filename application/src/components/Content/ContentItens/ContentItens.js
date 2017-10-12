import React from 'react';
import './ContentItens.css';

class ContentItens extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itens : ''
        }
    }
    render(){
        return(
            <div>
                <h2>Lista de Tarefas</h2>

                <ul>{this.props.itens}</ul>
            </div>
        );
    }
}

export default ContentItens;
