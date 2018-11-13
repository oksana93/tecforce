import React, {Component} from 'react';
import '../BodyForm/style.css';
import MainForm from "../MainForm";

class BodyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: null,
        }
    }

    render() {
        return (
            <div className="BodyForm">
                <MainForm/>
            </div>
        );
    }
}

export default BodyForm;
