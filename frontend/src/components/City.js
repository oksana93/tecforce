import React, {Component} from 'react';
import agent from '../agent';
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [],
            name: '',
            cityId: this.props.cityId,
            cityIdChange: this.props.cityIdChange,
            isOpen: false,
        };
        this.getAllCities(this.props)
    }

    render() {
        const cityItems = this.state.cityList.map((city) =>
            <MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>
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
                    }}>cd
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {cityItems}
                </Select>
                <FormHelperText>Choose a city from the list</FormHelperText>
            </h3>
        );
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
        this.state.cityIdChange(event.target.key);
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
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    };
}

export default City;