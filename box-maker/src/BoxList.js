import React, { Component } from 'react';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this)

    }
    addBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    // removeBox() {
    //     this.setState({
    //         boxes: boxes.filter()
    //     })
    // }
    render() {
        const boxesToDraw = this.state.boxes.map((box) => (
            <Box
                key={box.id}
                height={box.height}
                width={box.width}
                backgroundColor={box.backgroundColor}
            />
        ));
        return (
            <div className="BoxList">
                <h1>Box Drawer</h1>
                <div>
                    <NewBoxForm addBox={this.addBox} />
                </div>
                <div className="drawBoxes">
                    {boxesToDraw}
                </div>

            </div>
        )
    }

}
export default BoxList;