import React, {Component} from 'react';
import './style.css';
import agent from "../../../agent";
import Forecast from "../../Forecast";

class FirstPreviousForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cityId: '',
            forecastList: []
        }
    }

    componentWillMount() {
        if (this.props.match) {
            let name = this.props.match.params.name;
            let cityId = this.props.match.params.cityId;
            this.getPreviousForecastByCity(cityId, name);
        }
    }


    render() {
        const forecastList = this.state.forecastList;
        if (forecastList)
            return <div className="PreviousForecast">
                <h2 className="j434 j440 j461">{this.state.name}</h2>
                {forecastList.map(forecast =>
                    <Forecast key={forecast.id} forecast={forecast}/>)}
            </div>;
        else
            return null;
    }

    getPreviousForecastByCity = (cityId, name) => {
        (cityId != "") &&
        agent.Agent.previousForecastsByCity(cityId)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                console.log(data);
                this.setState({
                    name: name,
                    cityId: cityId,
                    forecastList: data
                });
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (FirstPreviousForecast);