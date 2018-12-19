import React, {Component} from 'react';
import './style.css';
import ForecastForm from "../ForecastForm";

class BodyForm extends Component {
    render() {
        return (
            <div className="BodyForm">
                <ForecastForm cityId={this.props.cityId}/>
            </div>
        );
    }
}

export default (BodyForm);
