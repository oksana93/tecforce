import React from 'react';
import '../css/HeaderForm.css';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from "@material-ui/core/Typography/Typography";
import Input from "@material-ui/core/Input/Input";
import SelectForm from "./SelectForm";

const HeaderForm = () => {
    const options = [
        {label: 'Samara'},
        {label: 'Moscow'},
        {label: 'St Petersburg'}
    ];

    return (
        <div className="HeaderForm">
            <Typography variant="h3" color="inherit" noWrap>
                <InputLabel>
                    <div>
                        <div>
                            <SelectForm/>
                        </div>
                    </div>
                </InputLabel>
            </Typography>
        </div>
    );
};


export default HeaderForm;
