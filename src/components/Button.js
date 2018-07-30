import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-block btn-outline-success" onClick={() => { alert('click'); }}>Mudar Planeta!</button>
            </div>
        );
    }
}

export default Button;