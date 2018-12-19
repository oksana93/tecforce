import React, {Component} from "react";
import './style.css';
import PreviousForecast from "../PreviousForecast";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import City from "../../first/City";

class FirstExample extends Component {
    render() {
        return <div className="FirstExample">
            <div className="FirstExampleBody">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={() => (
                            <City/>
                        )}/>
                        <Route path='/previousForecast/:name/:cityId' component={({match}) => (
                            <PreviousForecast name={match.params.name} cityId={match.params.cityId}/>
                        )}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    }
}

export default (FirstExample);