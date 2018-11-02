import React from 'react';
import '../css/HeaderForm.css';
import InputLabel from '@material-ui/core/InputLabel';
import SelectCity from "./CityList";

const HeaderForm = () => {
    return (
        <div className="HeaderForm">
            <InputLabel>
                <SelectCity/>
            </InputLabel>
        </div>
    );
};


export default HeaderForm;
