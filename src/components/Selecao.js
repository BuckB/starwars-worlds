import React, { Component } from 'react';

class Selecao extends Component {

    handleChange = () =>  {
        this.props.onChangeFunction();
    }

    render() {
        const climas = this.props.data;
        const climasList = climas.map((clima) =>
            <option key={clima.toString()} value={clima.toString()}>{clima}</option>
        );
        return (
            <select className={this.props.class} name={this.props.name} value={this.props.value} onChange={this.props.onChangeFunction}
            disabled = {this.props.placeholder === "Desconhecido"} >
                <option value="" disabled>{this.props.placeholder}</option>
                {climasList}
            </select>
        );
    }
}

export default Selecao;