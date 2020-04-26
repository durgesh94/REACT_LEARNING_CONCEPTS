import React from "react";
import { Parent } from "./Parent";
import { ClassComp } from "./ClassComp";
import FunComp from "./FunComp";
import Destructuring from "./Destructuring";
import { EventHandler } from "./EventHandler";
import { CondRender } from "./CondRender";
import ListRender from "./ListRender";
import { Form } from "./Form";

export class Basic extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {
                name: 'Durgesh Tambe',
                address: 'Beed, Maharashtra'
            },
            phone: '9096978887'
        }
    }

    render() {
        const { data, phone } = this.state;
        return (
            <div>
                {/* <h5>Basic</h5>
                <Parent />
                <ClassComp />
                <FunComp />
                <Destructuring data={data} phone={phone} />
                <EventHandler />
                <h5>Conditional Rendering</h5>
                <CondRender /> 
                <h5>List Rendering</h5>
                <ListRender />*/}
                <Form />
            </div>
        )
    }
}