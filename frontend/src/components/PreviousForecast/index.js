import React, {Component} from 'react';
import './style.css';
import agent from "../../agent";
import Forecast from "../Forecast";

class PreviousForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastList: []
        };
        this.getPreviousForecastByCity(this.props.cityId);

    }

    render() {
        const forecastList = this.state.forecastList;
        if (forecastList)
            return forecastList.map(forecast =>
                <div className="PreviousForecast">
                    <Forecast key={forecast} forecast={forecast}/>
                </div>);
        else
            return null;
    }

    getPreviousForecastByCity = (cityId) => {
        (cityId != "") &&
        agent.Agent.previousForecastsByCity(cityId)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                this.setState({forecastList: data});
                console.log(data);
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (PreviousForecast);