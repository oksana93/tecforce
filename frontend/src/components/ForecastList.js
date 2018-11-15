import React, {Component} from 'react';
import PreviousForecast from "./PreviousForecast";

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.cityId,
            forecastState: this.props.forecastState,
            forecastCurrent: this.props.forecastCurrent,
            forecastPrevious: this.props.forecastPrevious
        }
    }

    render() {
        {
            console.log(this.state.forecastState == this.state.forecastPrevious)
            if (this.state.forecastState == this.state.forecastPrevious)
                return <div className="ForecastList">
                    <PreviousForecast cityId={this.state.cityId}/>
                </div>
        }
        return <div className="ForecastList"></div>
    }
}

export default (ForecastList);
