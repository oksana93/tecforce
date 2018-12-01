import {Component} from "react";
import FirstBodyForm from "./FirstBodyForm";
import React from "react";


class FirstExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="FirstExample">
            <FirstBodyForm cityId={this.props.cityId}/>
        </div>
    }
}

export default (FirstExample);