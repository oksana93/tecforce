import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.cityId,
            currentState: this.props.currentState,
            forecastState: this.props.forecastState
        }
    }

    render() {
        return (
            <div className={ForecastList}>

            </div>
        )
    }
}

export default ForecastList;
