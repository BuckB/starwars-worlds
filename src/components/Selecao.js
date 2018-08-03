import React, { Component } from 'react';

class Selecao extends Component {

    handleChange = () =>  {
        this.props.onChangeFunction();
    }

    render() {
        const climas = this.props.data;
        const climasList = climas.map((clima) =>
            <option value={clima.toString()}>{clima}</option>
        );
        return (
            <select name="playerClima" value={this.props.valor} onChange={this.props.onChangeFunction}>{climasList}</select>
        );
    }
}

export default Selecao;