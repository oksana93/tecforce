import {Component} from "react";
import HeaderForm from "./HeaderForm";
import BodyForm from "./BodyForm";
import React from "react";


class SecondExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="SecondExample">
            <HeaderForm cityId={this.props.cityId} cityIdChange={this.props.cityIdChange}/>
            <BodyForm cityId={this.props.cityId}/>
        </div>
    }
}

export default (SecondExample);