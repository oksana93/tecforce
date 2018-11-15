"use strict";
import React, {Component} from 'react';
import './/style.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import ForecastList from "../ForecastList";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#696a9d',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

class ForecastForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.cityId,
            forecastState: '',
            forecastCurrent: 'current',
            forecastPrevious: 'previous'
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="ForecastForm">
                <Tabs className={classes.root} value={this.state.forecastState} indicatorColor="primary"
                      onChange={this.handleChange}>
                    <Tab classes={{root: classes.tabRoot, selected: classes.tabSelected}} value={this.state.current} label="Прогноз на сегодня"/>
                    <Tab classes={{root: classes.tabRoot, selected: classes.tabSelected}} value={this.state.previous} label="Прогноз на прошедший месяц"/>
                </Tabs>
                <ForecastList cityId={this.state.cityId} forecastState={this.state.forecastState} forecastCurrent={this.state.forecastCurrent}
                              forecastPrevious={this.state.forecastPrevious}/>
            </div>
        );
    }

    handleChange = (event, value) => {
        this.setState({ forecastState: value });
    };
}


ForecastForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ForecastForm);