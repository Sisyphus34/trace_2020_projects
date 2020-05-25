import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        height: `${this.props.height}em`,
                        width: `${this.props.width}em`,
                        backgroundColor: `${this.props.backgroundColor}`
                    }}
                />
                <button>Remove Box</button>
            </div>
        )
    }
}
export default Box;