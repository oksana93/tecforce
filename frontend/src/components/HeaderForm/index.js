import React, {Component} from 'react';
import '../HeaderForm/style.css';
import InputLabel from '@material-ui/core/InputLabel';
import CityList from "../CityList";

class HeaderForm extends Component {
    constructor(props) {
        super(props);
    }

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
