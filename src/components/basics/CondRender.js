import React from "react";

export class CondRender extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const { isLoggedIn } = this.state;

        //** APPROACH 1 -> IF-ELSE */
        // if (isLoggedIn) return <div>Welcome Durgesh.</div>
        // else return <div>Welcome Geust.</div>

        //** APPROACH 2 -> VARIABLE */
        // let message
        // if (isLoggedIn) message = <div>Welcome Durgesh.</div>
        // else message = <div>Welcome Geust.</div>

        // return <div>{message}</div>

        //** APPROACH 3 -> TERNERY OPERATOR */
        // return isLoggedIn ?
        //     <div>Welcome Durgesh.</div>
        //     : <div>Welcome Geust.</div>

        //** APPROACH 4 -> && OPERATOR */
        return isLoggedIn && <div>Welcome Durgesh.</div>
    }
}