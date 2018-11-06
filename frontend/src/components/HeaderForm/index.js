import React, {Component} from 'react';
import '../HeaderForm/style.css';
import InputLabel from '@material-ui/core/InputLabel';
import CityList from "../CityList";

class HeaderForm extends Component {
    render() {
        return (
            <div className="HeaderForm">
                <InputLabel>
                    <CityList/>
                </InputLabel>
            </div>
        );
    }
};

export default HeaderForm;
