import React, { Component } from "react"
import "./Coin.css"
import coinback from './coin-back.jpg'

class CoinBack extends Component {
  render() {
    return (
      <div className="Coin-container">
        <img src={coinback} alt="tails" />
      </div>
    )
  }
}

export default CoinBack
