import {Component} from "react";
import './style.css';
import agent from "../../../agent";
import Grid from "@material-ui/core/Grid/Grid";
import React from "react";
import CurrentCityForecast from "../CurrentCityForecast/index";

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: []
        };
        this.getAllCitiesWithCurrentForecast();
    }

    render() {
        return (
            <div className="City">
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {this.state.cityList.map((city) =>
                        <CurrentCityForecast key={city.id} city={city}/>
                    )}
                </Grid>
            </div>
        );
    }

    getAllCitiesWithCurrentForecast = () => {
        agent.Agent.cityListWithCurrentForecast()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    cityList: data
                });
                console.log(this.state.cityList);
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default (City);