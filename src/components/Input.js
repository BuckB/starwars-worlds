import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input name={this.props.name} className={this.props.class} type={this.props.type} onChange={this.props.onChangeFunction} value={this.props.value} placeholder={this.props.placeholder} />
                {this.props.validacao && (<div className="valid-feedback card-text" style={{ display: 'block' }}> Yoda: "Correto você está. Siiiiiiiim."</div>)}
                {this.props.validacao === false && (<div className="invalid-feedback card-text" style={{ display: 'block' }}> Yoda: "hmmm...{this.props.checkValidacao} a resposta correta é."</div>)}
            </div>
        );
    }
}

export default Input;