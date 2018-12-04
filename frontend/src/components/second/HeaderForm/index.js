import React, {Component} from 'react';
import './style.css';
import InputLabel from '@material-ui/core/InputLabel';
import CityList from "../CityForm";

class HeaderForm extends Component {
    render() {
        return (
            <div className="HeaderForm">
                <InputLabel>
                    <CityList cityId = {this.props.cityId} cityIdChange={this.props.cityIdChange}/>
                </InputLabel>
            </div>
        );
    }
}

export default HeaderForm;
