import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './ColorPalette.css'

class ColorPalette extends Component {
    static defaultProps = {
        numBoxes: 66,
        allColors: ["rgb(134, 97, 166)", "rgb(121, 85, 155)", "rgb(161, 116, 207)",
            "rgb(126, 67, 176)", "rgb(113, 48, 166)", "rgb(205, 91, 205)",
            "rgb(165, 48, 178)", "rgb(145, 41, 162)", "rgb(126, 32, 148)",
            "rgb(80,22,109)", "rgb(222,120,220)", "rgb(242,182,210)", "rgb(68,36,133)", "rgb(248,205,45)",
            "rgb(8,248,242)", "rgb(0,179,245)", "rgb(71,1,244)", "rgb(146,1,244)"
        ],
    };
    render() {
        const palette = Array.from({ length: this.props.numBoxes }).map(() => (
            <ColorBox colors={this.props.allColors} />));
        return (
            <div className="ColorPalette" >{palette}</div>
        )
    }
}
export default ColorPalette;