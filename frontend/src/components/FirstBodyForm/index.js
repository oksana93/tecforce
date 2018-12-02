import React, {Component} from 'react';
import '../BodyForm/style.css';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import agent from "../../agent";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: theme.spacing.unit * 4,
        marginLeft: '10vw',
        width: '80vw',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        fontWeight: 500
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
    table: {
        width: 'auto !important'
    },
    tableCell: {
        fontWeight: 500,
    },
});

class FirstBodyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: []
        };
        this.getAllCitiesWithCurrentForecast();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="FirstBodyForm">
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {this.state.cityList.map((city) => {
                        return <Paper key={city.id} className={classes.root} elevation={1}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>city</TableCell>
                                            <TableCell>date</TableCell>
                                            <TableCell>day</TableCell>
                                            <TableCell>temp (degree)</TableCell>
                                            <TableCell>wind ()</TableCell>
                                            <TableCell>text</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{city.name}</TableCell>
                                            <TableCell>{city.currentForecast.date}</TableCell>
                                            <TableCell>{city.currentForecast.day}</TableCell>
                                            <TableCell>
                                                <Grid container direction="column" justify="center"
                                                      alignIcdtems="flex-start">
                                                    <div>{city.currentForecast.minTemp}</div>
                                                    <dic>{city.currentForecast.maxTemp}</dic>
                                                </Grid>
                                            </TableCell>
                                            <TableCell>
                                                <Grid container direction="column" justify="center"
                                                      alignItems="flex-start">
                                                    <div>{city.currentForecast.minWind}</div>
                                                    <div>{city.currentForecast.maxWind}</div>
                                                </Grid>
                                            </TableCell>
                                            <TableCell>
                                                {city.currentForecast.text}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Paper>
                    })}
                </Grid>
            </div>
        );
    }

    getAllCitiesWithCurrentForecast = () => {
        agent.Agent.cityListWithCurrentForecast()
            .then(response => response.json())
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

export default withStyles(styles)(FirstBodyForm);
