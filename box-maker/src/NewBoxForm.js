import React, { Component } from 'react';
import uuidKey from 'react-uuid'
import './NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            backgroundColor: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const newBox = { ...this.state, "id": uuidKey() }
        this.props.addBox(newBox);
        this.setState({
            width: "",
            height: "",
            backgroundColor: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="BoxForm">
                <div>
                    <label htmlFor='height'>
                        Height:
                    <input
                            type="text"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div> <label htmlFor='width'>
                    Width:
                    <input
                        type="text"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange} />
                </label>
                </div>
                <div>
                    <label htmlFor='backgroundColor'>
                        Background Color:
                    <input
                            type="text"
                            name="backgroundColor"
                            value={this.state.backgroundColor}
                            onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        )
    }

}
export default NewBoxForm;