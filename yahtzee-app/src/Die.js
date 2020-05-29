import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberAsString: ["one", "two", "three", "four", "five", "six"]
  }
  render() {
    let variableClassName = `Die fas fa-dice-${this.props.numberAsString[this.props.val - 1]} fa-5x `
    if (this.props.locked) variableClassName += "Die-locked";
    return (
      <i
        className={variableClassName}

        onClick={() => this.props.handleClick(this.props.idx)}
      >

      </i>
    );
  }
}

export default Die;
