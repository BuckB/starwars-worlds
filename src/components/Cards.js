import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (
            <div className="card mb-4 shadow-sm" /* style={{ width: `24rem` }}*/ >
                <div className="card-header text-center">
                    <h5 className="card-title">props.name</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">props.population</p>
                    <p className="card-text">props.climate</p>
                    <p className="card-text">Apareceu em props.aparicoes Filmes</p>
                </div>
            </div>
        );
    }
}

Cards.propTypes = {

};

export default Cards;