import React, { Component } from "react";

export class Child extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h5>Child</h5>
                <button onClick={this.props.eventHandler}>Change Parent Message</button>
                <button onClick={()=> this.props.eventHandler2('Child')}>Change Parent Message</button>
            </div>
        )
    }
}