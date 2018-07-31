import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { planetaId: 1 };
    }

    handleClick() {
        this.setState({ planetaId: Math.floor(Math.random() * (61 - 1) + 1) });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-block btn-outline-success" onClick={this.handleClick}>Novo Planeta!</button>
            </div>
        );
    }
}

export default Button;