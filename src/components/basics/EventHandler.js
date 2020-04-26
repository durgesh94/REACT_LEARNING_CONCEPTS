import React from "react";

export class EventHandler extends React.Component {

    constructor() {
        super();
        this.state = {
            message: 'Test Event Handling...'
        }
        this.eventHandler = this.eventHandler.bind(this); // Fro 3rd Approach
    }

    eventHandler(type) {
        this.setState({ message: `Approach ${type}, Working...` });
    }

    eventHandler2 = (type) => {
        this.setState({ message: `Approach ${type}, Working...` });
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <h5>EventHandler</h5>
                <p>{message}</p>
                <button onClick={this.eventHandler.bind(this, '1')}>Approach 1</button>
                <button onClick={() => this.eventHandler('2')}>Approach 2</button>
                <button onClick={this.eventHandler}>Approach 3</button>
                <button onClick={this.eventHandler2}>Approach 4</button>
            </div>
        )
    }
}