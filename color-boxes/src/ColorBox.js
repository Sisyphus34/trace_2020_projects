import React, { Component } from 'react'
import './ColorBox.css'

class ColorBox extends Component {
    render() {
        return (
            <div className="ColorBox" style={{ backgroundColor: this.props.boxColor }} onClick={this.handleClick}></div>
        )
    }
}
export default ColorBox;