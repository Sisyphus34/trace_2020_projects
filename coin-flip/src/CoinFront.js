import React, { Component } from "react"
import "./Coin.css"
import coinfront from './coin-front.jpg'

class CoinFront extends Component {
  render() {
    return (
      <div className="Coin-container">
        <img src={coinfront} alt="heads" />
      </div>
    )
  }
}

export default CoinFront
