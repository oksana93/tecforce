import React, {Component} from "react";
import HeaderForm from "./HeaderForm/index";
import BodyForm from "./BodyForm/index";


class SecondExample extends Component {
    render() {
        return <div className="SecondExample">
            <HeaderForm cityId={this.props.cityId} cityIdChange={this.props.cityIdChange}/>
            <BodyForm cityId={this.props.cityId}/>
        </div>
    }
}

export default (SecondExample);