import React, {Component} from 'react';
import '../AppForm/style.css';
import SecondExample from '../SecondExample';
import withStyles from "@material-ui/core/es/styles/withStyles";
import * as PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge/Badge";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import MailIcon from '@material-ui/icons/Mail';
import HeaderForm from "../HeaderForm";
import FirstExample from "../FirstExample";

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
    },
    badge: {
        alignItems: 'flex-start',
        position: 'fixed'
    }
});

class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: '',
            cityIdChange: this.cityIdChange.bind(this),
            invisible: false
        }
    }

    cityIdChange = (cityId) => {
        this.setState({
            cityId: cityId
        });
    };

    handleBadgeVisibility = () => {
        this.setState(prevState => ({invisible: !prevState.invisible}));
    };

    render() {
        const {classes} = this.props;
        const {invisible} = this.state;
        return (
            <div className="App">
                <div className={classes.badge}>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch color="primary" checked={!invisible} onChange={this.handleBadgeVisibility}/>
                            }
                            label = {this.state.invisible? 'show first example' : 'show second example'}
                        />
                    </FormGroup>
                </div>
                {this.state.invisible && <SecondExample cityId={this.state.cityId} cityIdChange={this.state.cityIdChange}/>}
                {!this.state.invisible && <FirstExample/>}
            </div>
        );
    }
}

AppForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
