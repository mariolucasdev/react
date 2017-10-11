import React from 'react';

export default class HelloWorld extends React.Component {
    render() {
        return <h1>Olá {this.props.nome}!</h1>;
    }
}
