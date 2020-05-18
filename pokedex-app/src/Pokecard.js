import React, { Component } from 'react'
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="front" onTouchStart="this.classList.toggle('hover');">
                        <div className="Pokecard front">
                            <h3>{this.props.name}</h3>
                            <img src={imgSrc} alt={this.props.name} />
                            <div className="Pokecard-data">Type: {this.props.type}</div>
                            <div className="Pokecard-data">EXP: {this.props.exp}</div>
                        </div>
                    </div>
                    <div className="Pokecard-back back" onTouchStart="this.classList.toggle('hover');">
                    </div>
                </div>
            </div>

        )
    };
}

export default Pokecard;