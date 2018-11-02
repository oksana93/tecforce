import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SelectCity from "./SelectCity";
import cityList from '../testCityList'

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class CityList extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                    <SelectCity cityList = {cityList}/>
                </FormControl>
            </form>
        );
    }
}

export default withStyles(styles)(CityList);