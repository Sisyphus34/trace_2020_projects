import React, { Component } from "react"
import "./Flipper.css"
import CoinFront from "./CoinFront"
import CoinBack from "./CoinBack"
import { choice } from "./helpers"
import ReactCardFlip from "react-card-flip"
import coinfront from './coin-front.jpg'
import coinback from './coin-back.jpg'

class Flipper extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: coinfront },
      { side: "tails", imgSrc: coinback },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
      face: props.coins[0],
      numFlips: 0,
      headCount: 0,
      tailCount: 0,
      isFlipping: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  flipCoin() {
    const currCoin = choice(this.props.coins)
    this.setState((st) => {
      return {
        face: currCoin,
        isFlipped: st.face
          ? (this.state.face.side !== currCoin.side
            ? st.isFlipped
            : !st.isFlipped)
          : false,

        numFlips: st.numFlips + 1,
        headCount: st.headCount + (currCoin.side === "heads" ? 1 : 0),
        tailCount: st.tailCount + (currCoin.side === "tails" ? 1 : 0),
        isFlipping: false
      }

    })
  }
  buttonDisable() {
    this.setState({
      isFlipping: true
    })
  }

  handleClick(e) {
    e.preventDefault()
    this.buttonDisable();
    setTimeout(async () => {
      clearInterval(flipPola)
      await this.flipCoin()
    }, 900);
    const flipPola = setInterval(() => {
      this.setState((cuSt) => {
        return {
          isFlipped: !cuSt.isFlipped
        }
      })
    }, 150);
  }
  render() {
    return (
      <div className="Flipper">
        <div className="Flip-title">Let's flip a coin!</div>
        {/* {this.state.face && <Coin info={this.state.face} />} */}
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          infinite="true"
          flipSpeedBackToFront={0.4}
          flipSpeedFrontToBack={0.4}
        >
          {this.state.numFlips ? <CoinFront /> : ""}
          {this.state.numFlips ? <CoinBack /> : ""}
        </ReactCardFlip>

        <div className="Flip-btn">
          <button onClick={this.handleClick} disabled={this.state.isFlipping}>
            {this.state.isFlipping ? "Flipping Coin..." : "Flip Coin"}
          </button>
        </div>
        <div className="Flip-counter">
          Out of {this.state.numFlips} flips, there have been{" "}
          {this.state.headCount} heads and {this.state.tailCount} tails.
        </div>
      </div>
    )
  }
}

export default Flipper
