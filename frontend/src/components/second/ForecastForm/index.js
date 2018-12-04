"use strict";
import React, {Component} from 'react';
import './style.css';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import PreviousForecast from "../PreviousForecast";
import CurrentForecast from "../CurrentForecast";

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

const forecastCurrent = 'current';
const forecastPrevious = 'previous';

class ForecastForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: props.cityId,
            value: forecastCurrent
        }
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        if (this.state.cityId != this.props.cityId) {
            this.handleChangeByCity();
            return null;
        } else {
            return (
                <div className="ForecastForm">
                    <Tabs className={classes.root} value={value} indicatorColor="primary"
                          onChange={this.handleChange}>
                        <Tab classes={{root: classes.tabRoot, selected: classes.tabSelected}} value={forecastCurrent}
                             label="Прогноз на сегодня"/>
                        <Tab classes={{root: classes.tabRoot, selected: classes.tabSelected}} value={forecastPrevious}
                             label="Прогноз на прошедший месяц"/>
                    </Tabs>
                    {value === forecastPrevious && <PreviousForecast cityId={this.props.cityId}/>}
                    {value === forecastCurrent && <CurrentForecast cityId={this.props.cityId}/>}
                </div>
            );
        }
    }

    handleChangeByCity = () => {
        this.setState({
            cityId: this.props.cityId,
            value: forecastCurrent
        })
    };

    handleChange = (event, value) => {
        this.setState({value});
    };
}


ForecastForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ForecastForm);