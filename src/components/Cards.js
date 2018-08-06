import React, { Component } from 'react';
import Button from './Button';
import Selecao from './Selecao';

class Cards extends Component {
    constructor(props) {
        super(props);
        /** ação do botão para trocar o planeta */
        this.trocaPlaneta = this.trocaPlaneta.bind(this);
        /** trata a mudança de estado gerada pelos inputs */
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            /** dados puxados da api */
            planeta: [],
            /** gera um id randomico dentro de um intervalo valido para buscar dados do planeta */
            id: Math.floor(Math.random() * (61 - 1) + 1),
            /** climas possíveis para popular o select */
            climas: [
                "arid",
                "artificial",
                "frigid",
                "frozen",
                "hot",
                "humid",
                "moist",
                "murky",
                "poluted",
                "superheated",
                "superhot",
                "temperate",
                "tropical",
                "windy",
                "arid, temperate, tropical",
                "arid, rocky, windy",
                "artificial, temperate",
                "temperate, moist",
                "temperate, arid, windy",
                "temperate, arid, subartic",
                "temperate, artic",
                "tropical, temperate"
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
                    estrelou: Object.keys(result.films),
                    /** respostas do jogador */
                    player_populacao: '',
                    player_clima: '',
                    player_aparicao: '',
                    /** validaçao das respostas */
                    valida_populacao: '',
                    valida_clima: '',
                    valida_aparicao: ''
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
        let nome = `player_`+[event.target.name];
        this.setState({
            [nome]: event.target.value
        });
        this.validaResposta(event);
    }

    validaResposta(event) {
        let valida = `valida_`+[event.target.name];
        let valor = event.target.value;

        switch (event.target.name) {
            case 'populacao':
                if ( this.state.planeta.population === valor)
                    this.setState({ [valida]: true});
                else this.setState({ [valida]: false});
                break;
            case 'clima':
                if ( this.state.planeta.climate === valor)
                    this.setState({ [valida]: true});
                else this.setState({ [valida]: false});
                break;
            case 'aparicao':
                if ( `${this.state.estrelou.length}` === valor)
                    this.setState({ [valida]: true});
                else this.setState({ [valida]: false});
                break;
            default: break;
        }
        event.preventDefault();
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
                            <form id="planeta-form" noValidate>
                                <div className="form-group">
                                    <input name="populacao" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.player_populacao} placeholder="Qual a População?" />
                                    { this.state.valida_populacao && (<div className="valid-feedback card-text" style={{display: 'block'}}> Yoda: "Correto você está. Siiiiiiiim."</div>) }
                                    { this.state.valida_populacao === false && (<div className="invalid-feedback card-text" style={{display: 'block'}}> Yoda: "hmmm...{planeta.population} a resposta correta é."</div>) }
                                </div>
                                <div className="form-group">
                                    <Selecao data={climas} name={"clima"} class={"form-control"} value={this.state.player_clima} onChangeFunction={this.handleInputChange} placeholder={"Qual é o Clima?"} />
                                    { this.state.valida_clima && (<div className="valid-feedback card-text" style={{display: 'block'}}> Yoda: "Aliada sua é a Força. E poderosa aliada ela é."</div>) }
                                    { this.state.valida_clima === false && (<div className="invalid-feedback card-text" style={{display: 'block'}}> Yoda: "{planeta.climate} a resposta certa é. Concentrar você precisa."</div>) }
                                </div>
                                <div className="form-group">
                                    <label htmlFor="aparicao">Apareceu em quantos filmes?</label>
                                    <input name="aparicao" className="form-control" type="number" onChange={this.handleInputChange} value={this.state.player_aparicao} placeholder="Quantos filmes?" />
                                    { this.state.valida_aparicao && (<div className="valid-feedback card-text" style={{display: 'block'}}> Yoda: "Em {estrelou.length} filmes, {planeta.name} apareceu. De parabéns você está!"</div>) }
                                    { this.state.valida_aparicao === false && (<div className="invalid-feedback card-text" style={{display: 'block'}}> Yoda: "Em {estrelou.length} filmes, {planeta.name} apareceu."</div>) }
                                </div>
                            </form>
                        </div>
                    </div>
                    <Button class={"btn btn-block btn-outline-primary"} click={this.trocaPlaneta} buttonText={"Novo Planeta!"} />
                </div>
            );
        }
    }
}

export default Cards;
