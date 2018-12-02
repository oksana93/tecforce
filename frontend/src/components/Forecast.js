import React, {Component} from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

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
});

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        const forecast = this.props.forecast;
        console.log(forecast);
        return <div>
            <Paper className={classes.root} elevation={1}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Avatar className={classes.bigAvatar} src={forecast.imageUrl}/>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>date</TableCell>
                                <TableCell>day</TableCell>
                                <TableCell>temp (degree)</TableCell>
                                <TableCell>wind ()</TableCell>
                                <TableCell>text</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{forecast.date}</TableCell>
                                <TableCell>{forecast.day}</TableCell>
                                <TableCell>
                                    <Grid container direction="column" justify="center" alignIcdtems="flex-start">
                                        <div>{forecast.minTemp}</div>
                                        <dic>{forecast.maxTemp}</dic>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container direction="column" justify="center" alignItems="flex-start">
                                        <div>{forecast.minWind}</div>
                                        <div>{forecast.maxWind}</div>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    {forecast.text}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Paper>
        </div>
    }
}

export default withStyles(styles)(Forecast);