import React, {Component} from "react";
import './style.css';
import CurrentForecast from "../CurrentForecast";
import PreviousForecast from "../PreviousForecast";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class FirstExample extends Component {
    render() {
        return <div className="FirstExample">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => (
                        <CurrentForecast/>
                    )}/>
                    <Route path='/previousForecast/:name/:cityId' component={({ match }) => (
                        <PreviousForecast name={match.params.name} cityId={match.params.cityId}/>
                    )}/>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default (FirstExample);