import React, { Component } from 'react'
import { choice } from './helpers'
import './ColorBox.css'
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { boxColor: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (
            newColor === this.state.boxColor
        )
        this.setState({ boxColor: newColor })
    }
    handleClick() {
        this.pickColor()
    }
    render() {
        return (
            <div
                className="ColorBox"
                style={{ backgroundColor: this.state.boxColor }}
                onClick={this.handleClick}>
            </div>
        )
    }
}
export default ColorBox;