import React, {Component} from 'react';
import '../AppForm/style.css';
import HeaderForm from "../HeaderForm";
import BodyForm from "../BodyForm";
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

class AppForm extends Component {
    render() {
        return (
            <div className="App">
                <HeaderForm/>
                <BodyForm/>
            </div>
        );
    }
};

export default withStyles(styles)(AppForm);
