import React from 'react';
import './Content.css';

import Form from './Form/Form';
import ContentItens from './ContentItens/ContentItens';

class Content extends React.Component {
    render(){
        return(
            <div>
                <Form/>
                <ContentItens
                    itens ='Nome'
                />
            </div>
        );
    }
}

export default Content;
