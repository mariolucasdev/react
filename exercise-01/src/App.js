import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            itens : "visible",
            iten1 : "",
            iten2 : "",
            iten3 : "",
        }
    }

    hideAll = () => {this.setState({itens : "hidden"})};
    showAll = () => {this.setState({itens : "visible"})};
    resetAll = () => {this.setState({itens : ""})};

    alterIten1 = () => {
        if(this.state.itens === "hidden") {
            this.resetAll();
            {this.state.iten1 === "" ? this.setState({iten1 : "hidden"}) : this.setState({iten1 : "visible"})};
        } else {
            {this.state.iten1 === "" ? this.setState({iten1 : "hidden"}) : this.setState({iten1 : "visible"})};
        }
    }
    alterIten2 = () => {this.state.iten2 === "" ? this.setState({iten2 : "hidden"}) : this.setState({iten2 : "visible"})};
    alterIten3 = () => {this.state.iten3 === "" ? this.setState({iten3 : "hidden"}) : this.setState({iten3 : "visible"})};

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <section>
                    <div className="contentBtn">
                        <button onClick={this.alterIten1}>Button 01</button>
                        <button onClick={this.alterIten2}>Button 02</button>
                        <button onClick={this.alterIten3}>Button 03</button>

                        <button onClick={this.hideAll}>Hide All</button>
                        <button onClick={this.showAll}>Show All</button>
                    </div>

                    <div className="contentItens">
                        <div id={this.state.iten1} className={this.state.itens}><h1>Div 1</h1></div>
                        <div id={this.state.iten2} className={this.state.itens}><h1>Div 2</h1></div>
                        <div id={this.state.iten3} className={this.state.itens}><h1>Div 3</h1></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
