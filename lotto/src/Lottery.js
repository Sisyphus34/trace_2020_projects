import React, { Component } from 'react'
import './Lottery.css'
import Ball from './Ball'

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls })
        }
        this.handleClick = this.handleClick.bind(this);
    }
    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        })
        )
    }
    handleClick() {
        this.generate();
    }
    render() {
        // let randNum = Math.floor(Math.random() * this.props.num.length + 1);
        return (
            <section className="section">
                <div className="Lottery-container">
                    <h2>{this.props.title}</h2>
                    <div className="Lottery">
                        <div>
                            {
                                this.state.nums.map(n => <Ball num={n} />)
                            }
                        </div>
                    </div>
                    <button onClick={this.handleClick}>Generate</button>
                </div>
            </section>
        )
    };
}
export default Lottery;