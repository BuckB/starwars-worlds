import React, { Component } from 'react';
import Button from './Button';
import Selecao from './Selecao';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.trocaPlaneta = this.trocaPlaneta.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            planeta: [],
            id: Math.floor(Math.random() * (61 - 1) + 1),
            playerPopulacao: '',
            playerClima: '',
            playerAparicao: '',
            climas: [
                "arid",
                "temperate",
                "tropical",
                "frozen",
                "hot",
                "murky",
                "windy",
                "artificial",
                "frigid",
                "humid",
                "moist",
                "superhot",
                "temperate, moist",
                "temperate, arid, windy"
            ]
        };
    }

    componentDidMount() {
        this.getPlaneta();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.id !== prevState.id) {
            this.getPlaneta();
        }
    }

    getPlaneta() {
        fetch(`https://swapi.co/api/planets/${this.state.id}/`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    planeta: result,
                    estrelou: Object.keys(result.films)
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            );
    }

    trocaPlaneta() {
        this.setState({ id: Math.floor(Math.random() * (61 - 1) + 1) });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { error, isLoaded, planeta, climas, estrelou } = this.state;

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
                            <form className="planetaForm" onSubmit={this.handleSubmit}>
                                <input name="playerPopulacao" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.playerPopulacao} placeholder="Qual a População?" />
                                <p className="card-text">{planeta.population}</p>
                                <Selecao data={climas} valor={this.state.playerClima} onChangeFunction={this.handleInputChange} placeholder={"Qual é o Cilma?"}/>
                                <p className="card-text">{planeta.climate}</p>
                                <label htmlFor="aparicao">Apareceu em quantos filmes?</label>
                                <input name="playerAparicao" className="form-control" type="number" onChange={this.handleInputChange} value={this.state.playerAparicao} placeholder="Quantos filmes?"/>
                                <p className="card-text">Apareceu em {estrelou.length} Filmes</p>
                            </form>
                        </div>
                    </div>
                    <Button troca={this.trocaPlaneta} />
                </div>
            );
        }
    }
}

export default Cards;
