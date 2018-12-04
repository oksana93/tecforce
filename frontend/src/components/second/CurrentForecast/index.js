import React, {Component} from 'react';
import './style.css';
import agent from "../../../agent";
import Forecast from "../../Forecast";

class CurrentForecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentForecast: []
        };
        this.getCurrentForecastByCity(this.props.cityId);

    }

    render() {
        const forecast = this.state.currentForecast;
        if (this.props.cityId != "" && forecast)
            return <div className="CurrentForecast">
                <Forecast forecast={forecast}/>
            </div>;
        else
            return null;
    }

    getCurrentForecastByCity = (cityId) => {
        (cityId != "") &&
        agent.Agent.currentForecastsByCity(cityId)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                console.log(data);
                this.setState({currentForecast: data});
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (CurrentForecast);