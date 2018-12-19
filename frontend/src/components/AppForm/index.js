import React, {Component} from 'react';
import '../AppForm/style.css';
import SecondExample from '../second/SecondExample';
import withStyles from "@material-ui/core/es/styles/withStyles";
import * as PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/Switch/Switch";
import FirstExample from "../first/FirstExample";

const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: '100vh',
        minWidth: '100vw'
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2
    },
    badge: {
        zIndex: 3,
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
                {!this.state.invisible && <FirstExample/>}
                {this.state.invisible && <SecondExample cityId={this.state.cityId} cityIdChange={this.state.cityIdChange}/>}
            </div>
        );
    }
}

AppForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
