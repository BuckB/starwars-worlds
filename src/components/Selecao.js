import React from 'react';

var Selecao = props => {
    const climas = props.data;
    const climasList = climas.map((clima) =>
        <option key={clima.toString()}>{clima}</option>
    );
    return (
        <select>{climasList}</select>
    );
}

export default Selecao;