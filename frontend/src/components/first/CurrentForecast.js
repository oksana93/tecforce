import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import agent from "../../agent";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Link} from 'react-router-dom';

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
    button: {
        margin: theme.spacing.unit,
        color: 'black'
    }
});

class CurrentForecast extends Component {
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
            <div className="CurrentForecast">
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {this.state.cityList.map((city) => {
                        return <Paper key={city.id} className={classes.root} elevation={1}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell/>
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
                                            <TableCell>
                                                {city.currentForecast && <Avatar className={classes.bigAvatar}
                                                                                 src={city.currentForecast.imageUrl}/>}
                                            </TableCell>
                                            <TableCell>
                                                <Link className={classes.button} to={`/previousForecast/${city.name}/${city.id}`}>
                                                    {city.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>{city.currentForecast && city.currentForecast.date}</TableCell>
                                            <TableCell>{city.currentForecast && city.currentForecast.day}</TableCell>
                                            <TableCell>
                                                <Grid container direction="column" justify="center"
                                                      alignItems="flex-start">
                                                    <div>{city.currentForecast && city.currentForecast.minTemp}</div>
                                                    <div>{city.currentForecast && city.currentForecast.maxTemp}</div>
                                                </Grid>
                                            </TableCell>
                                            <TableCell>
                                                <Grid container direction="column" justify="center"
                                                      alignItems="flex-start">
                                                    <div>{city.currentForecast && city.currentForecast.minWind}</div>
                                                    <div>{city.currentForecast && city.currentForecast.maxWind}</div>
                                                </Grid>
                                            </TableCell>
                                            <TableCell>
                                                {city.currentForecast && city.currentForecast.text}
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

export default withStyles(styles)(CurrentForecast);
