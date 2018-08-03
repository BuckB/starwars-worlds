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
            <select className="form-control" name="playerClima" value={this.props.valor} onChange={this.props.onChangeFunction} required>
                <option value="" disabled>{this.props.placeholder}</option>
                {climasList}
            </select>
        );
    }
}

export default Selecao;