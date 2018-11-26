import React, {Component} from 'react';
import './style.css';
import agent from "../../agent";
import Forecast from "../Forecast";

class CurrentForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.cityId,
            currentForecast: null
        };
        this.getCurrentForecastByCity(this.props.cityId);
    }

    render() {
        const forecast = this.state.currentForecast;
        return forecast ? <Forecast forecast={forecast}/> : null;
    }

    getCurrentForecastByCity = (cityId) => {
        (cityId != "") &&
        agent.Agent.currentForecastsByCity(cityId)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                console.log(data);
                this.setState({
                    currentForecast: data
                })
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (CurrentForecast);