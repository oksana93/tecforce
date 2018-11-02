import React, {Component} from 'react';
import {action} from 'mobx';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

class SelectCity extends Component {
    state = {
        name: '',
        isOpen: false,
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleClose = () => {
        this.setState({isOpen: false});
    };

    handleOpen = () => {
        this.setState({isOpen: true});
    };
    agent;

    // getAllCities = () => {
    //     this.inProgress = true;
    //     this.errors = undefined;
    //     return this.agent.GetAllCity.cityList()
    //         .catch(action((err) => {
    //             this.errors = err;
    //             throw err;
    //         }))
    //         .finally(action(() => {
    //             this.inProgress = false;
    //         }));
    // };

    render() {
        let cityList = this.props.cityList;
        console.log(cityList);
        const cityItems = cityList.map((city) =>
            <MenuItem key={city.woeid} value={city.woeid}>{city.name}</MenuItem>
        );

        return (
            <h3>
                <InputLabel htmlFor="demo-controlled-open-select">
                    City
                </InputLabel>
                <Select
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'name',
                        id: 'demo-controlled-open-select',
                    }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {cityItems}
                </Select>
                <FormHelperText>Choose a city from the list</FormHelperText>
            </h3>
        );
    }
};

export default SelectCity;