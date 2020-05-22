import React, { Component } from 'react'
import './ColorPalette.css'
import ColorBox from './ColorBox'

class ColorPalette extends Component {
    static defaultProps = {
        colors: ["rgb(134, 97, 166)", "rgb(121, 85, 155)", "rgb(107, 72, 140)", "rgb(161, 116, 207)",
            "rgb(150, 100, 197)", "rgb(138, 83, 187)", "rgb(126, 67, 176)", "rgb(113, 48, 166)", "rgb(205, 91, 205)",
            "rgb(196, 74, 198)", "rgb(186, 56, 192)", "rgb(165, 48, 178)", "rgb(145, 41, 162)", "rgb(126, 32, 148)",
            "rgb(80,22,109)", "rgb(222,120,220)", "rgb(242,182,210)", "rgb(68,36,133)", "rgb(248,205,45)", "rgb(248,140,34)",
            "rgb(8,248,242)", "rgb(0,179,245)", "rgb(71,1,244)", "rgb(146,1,244)"

        ],
        numBoxes: 18,


    }
    render() {
        return (
            <div className="ColorPalette" >
                {this.props.colors.map((c) => {
                    return (
                        <ColorBox boxColor={this.props.colors[Math.floor(Math.random() * this.props.colors.length)]} />
                    )
                })}
            </div>
        )
    }
}
export default ColorPalette;