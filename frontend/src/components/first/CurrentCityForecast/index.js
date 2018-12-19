import React, {Component} from 'react';
import './style.css';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
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
        marginTop: theme.spacing.unit * 2,
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
    name: {
        color: 'write'
    }
});

class Index extends Component {
    render() {
        const {classes} = this.props;
        const city = this.props.city;
        const currentForecast = city.currentForecast;
        return (
            <div className="CurrentCityForecast">
                <Paper key={city.id} className={classes.paper} elevation={1}>
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
                                        {currentForecast && <Avatar className={classes.bigAvatar}
                                                                    src={currentForecast.imageUrl}/>}
                                    </TableCell>
                                    <TableCell>
                                        <Link className={classes.button}
                                              to={`/previousForecast/${city.name}/${city.id}`}>
                                            {city.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{currentForecast && currentForecast.date}</TableCell>
                                    <TableCell>{currentForecast && currentForecast.day}</TableCell>
                                    <TableCell>
                                        <Grid container direction="column" justify="center"
                                              alignItems="flex-start">
                                            <div>{currentForecast && currentForecast.minTemp}</div>
                                            <div>{currentForecast && currentForecast.maxTemp}</div>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container direction="column" justify="center"
                                              alignItems="flex-start">
                                            <div>{currentForecast && currentForecast.minWind}</div>
                                            <div>{currentForecast && currentForecast.maxWind}</div>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        {currentForecast && currentForecast.text}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
