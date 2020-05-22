import React, { Component } from "react"
import "./Coin.css"

class CoinFront extends Component {
  render() {
    return (
      <div className="Coin-container">
        <img src="https://tinyurl.com/react-coin-heads-jpg" alt="heads" />
      </div>
    )
  }
}

export default CoinFront
