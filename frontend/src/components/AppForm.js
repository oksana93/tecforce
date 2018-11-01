import React from 'react';
import '../css/AppForm.css';
import HeaderForm from "./HeaderForm";
import BodyForm from "./BodyForm";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2
    }
});

const AppForm = () => {
    return (
        <div className="App">
            <HeaderForm/>
            <BodyForm/>
        </div>
    );
};

export default withStyles(styles)(AppForm);
