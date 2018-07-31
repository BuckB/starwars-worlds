import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            planeta: []
        };
    }

    componentDidMount() {
        // let id = Math.floor(Math.random() * (61 - 1) + 1);
        // console.log(id);
        // fetch(`https://swapi.co/api/planets/${id}/`)
        //     .then(res => res.json())
        //     .then((result) => {
        //         this.setState({
        //             isLoaded: true,
        //             planeta: result
        //         });
        //     }, (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        //     );
        this.trocaPlaneta();
    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    trocaPlaneta = () => {
        let id = Math.floor(Math.random() * (61 - 1) + 1);
        console.log(id);
        fetch(`https://swapi.co/api/planets/${id}/`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    planeta: result
                });
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            );
    }

    render() {
        const { error, isLoaded, planeta } = this.state;
        if (error) { return (<div className="alert alert-danger">Error: {error.message}</div>); }
        else if (!isLoaded) { return <div>Carregando...</div>; }
        else {
            return (
                <div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header text-center">
                            <h5 className="card-title">{planeta.name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{planeta.population}</p>
                            <p className="card-text">{planeta.climate}</p>
                            <p className="card-text">Apareceu em props.aparicoes Filmes</p>
                        </div>
                    </div>
                    <Button />
                </div>
            );
        }
    }
}

Cards.propTypes = {

};

export default Cards;