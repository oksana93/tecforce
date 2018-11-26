import React, {Component} from 'react';
import '../BodyForm/style.css';
import ForecastForm from "../ForecastForm";

class BodyForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BodyForm">
                <ForecastForm cityId={this.props.cityId}/>
            </div>
        );
    }
}

export default (BodyForm);
