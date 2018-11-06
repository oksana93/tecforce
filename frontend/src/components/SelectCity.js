import React, {Component} from 'react';
import agent from '../agent';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

class SelectCity extends Component {
    state = {
        cityList: [],
        cityId: '',
        isOpen: false,
    };

    render() {
        const cityItems = this.state.cityList.map((city) =>
            <MenuItem key={city.id} id={city.id} value={city.name}>{city.name}</MenuItem>
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
                    value={this.state.cityId}
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

    constructor(props) {
        super(props);
        this.getAllCities(props);
    }

    handleChange = event => {
        this.setState({
            cityId: event.target.value
        });
    };

    handleClose = () => {
        this.setState({isOpen: false});
    };

    handleOpen = () => {
        this.getAllCities();
        this.setState({isOpen: true});
    };

    getAllCities = (props) => {
        agent.Agent.cityList()
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                this.setState({
                    cityList: data
                });
                console.log(this.state.cityList);
            });
    };
};

export default SelectCity;