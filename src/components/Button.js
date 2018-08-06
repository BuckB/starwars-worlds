import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className={this.props.class} onClick={this.props.click}>{this.props.buttonText}</button>
            </div>
        );
    }
}

export default Button;