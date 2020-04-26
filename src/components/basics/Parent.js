import React from "react";
import { Child } from "./Child";

export class Parent extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Hi'
        }
    }

    changeMessage = () => {
        this.setState({ message: 'GoodBye' });
    }

    changeMessage2 = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h5>Parent</h5>
                <p>{message}</p>
                <Child eventHandler={this.changeMessage} eventHandler2={this.changeMessage2} />
            </div>
        )
    }
}