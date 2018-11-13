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
    constructor(props) {
        super(props);
        this.state = {
            cityId: '',
            cityIdChange: this.cityIdChange.bind(this)
        }
    }

    cityIdChange = (cityId) => {
        this.setState({
            cityId: cityId
        });
    };

    render() {
        return (
            <div className="App">
                <HeaderForm cityId = {this.state.cityId} cityIdChange={this.state.cityIdChange}/>
                <BodyForm/>
            </div>
        );
    }
}

export default withStyles(styles)(AppForm);
