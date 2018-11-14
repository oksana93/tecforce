"use strict";
import React, {Component} from 'react';
import './/style.css';
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from "prop-types";
import ForecastList from "../ForecastList";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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
            color: '#40a9ff',
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
            cityId: this.props.cityId
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="ForecastForm">
                <div className={classes.root}>
                    <Button classes={{root: classes.tabRoot, selected: classes.tabSelected}}>
                        Прогноз на сегодня
                    </Button>
                    <Button classes={{root: classes.tabRoot, selected: classes.tabSelected}}>
                        Прогноз на прошедший месяц
                    </Button>
                </div>
                <ForecastList cityId={this.state.cityId}/>
            </div>
        );
    }
}


ForecastForm.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ForecastForm);