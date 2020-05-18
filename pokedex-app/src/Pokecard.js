import React, { Component } from 'react'
import './Pokecard.css'

class PokecardFront extends Component {
    render() {
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="Pokecard front" onTouchStart="this.classList.toggle('hover');">
                        <div className="Pokecard-inlay">
                            <h3>{this.props.name}</h3>
                            <div className="Pokecard-img">
                                <img src="" alt="image" />
                            </div>
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

export default PokecardFront;