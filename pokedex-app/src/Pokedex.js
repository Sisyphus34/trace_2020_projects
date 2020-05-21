import React, { Component } from "react"
import PokecardFront from "./Pokecard"

import "./Pokedex.css"

class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.retrievePokemon = this.retrievePokemon.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      pokemon: [],
    }
  }
  retrievePokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then(
      async (response) => {
        let parsedData = await response.json()
        // eslint-disable-next-line
        parsedData.results.map(async (result, i) => {
          result.id = i + 1

          // Second fetch to url
          let urlResponse = await fetch(result.url)
          let obj = await urlResponse.json()
          result.type = obj.types.map((t) => t.type.name + " ")
          result.base_experience = obj.base_experience

          this.setState((st) => ({
            pokemon: [...st.pokemon, result],
          }))
        })
      }
    )
  }
  handleClick() {
    this.retrievePokemon()
  }
  render() {
    return (
      <div className="Pokedex">
        <h1> Gotta Catch 'Em All </h1>
        <div>
          <button onClick={this.handleClick}>
            <div className="Poke-btn">Catch</div> Pokemon
          </button>
        </div>
        <div className="Pokedex-cards">
          {" "}
          {this.state.pokemon.map((p) => {
            return (
              <PokecardFront
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            )
          })}{" "}
        </div>
      </div>
    )
  }
}

export default Pokedex
