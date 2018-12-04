import React, {Component} from 'react';
import './style.css';
import agent from "../../../agent";
import Forecast from "../../Forecast";

class PreviousForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastList: []
        };
        this.getPreviousForecastByCity(this.props.cityId);

    }

    render() {
        const city = this.props.name;
        const forecastList = this.state.forecastList;
        if (forecastList)
            return <div className="PreviousForecast">
                {forecastList.map(forecast =>
                    <Forecast key={forecast.id} forecast={forecast}/>)}
            </div>;
        else
            return null;
    }

    getPreviousForecastByCity = (cityId) => {
        (cityId != "") &&
        agent.Agent.previousForecastsByCity(cityId)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                console.log(data);
                this.setState({forecastList: data});
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (PreviousForecast);