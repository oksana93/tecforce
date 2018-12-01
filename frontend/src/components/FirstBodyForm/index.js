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

class FirstBodyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: []
        };
        this.getAllCities()
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="FirstBodyForm">
                <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {this.state.cityList.map((city) =>
                        <Paper key={city.id} className={classes.root} elevation={1}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
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
                                            {/*<TableCell>{forecast.date}</TableCell>*/}
                                            {/*<TableCell>{forecast.day}</TableCell>*/}
                                            {/*<TableCell>*/}
                                                {/*<Grid container direction="column" justify="center"*/}
                                                      {/*alignIcdtems="flex-start">*/}
                                                    {/*<div>{forecast.minTemp}</div>*/}
                                                    {/*<dic>{forecast.maxTemp}</dic>*/}
                                                {/*</Grid>*/}
                                            {/*</TableCell>*/}
                                            {/*<TableCell>*/}
                                                {/*<Grid container direction="column" justify="center"*/}
                                                      {/*alignItems="flex-start">*/}
                                                    {/*<div>{forecast.minWind}</div>*/}
                                                    {/*<div>{forecast.maxTemp}</div>*/}
                                                {/*</Grid>*/}
                                            {/*</TableCell>*/}
                                            {/*<TableCell>*/}
                                                {/*{forecast.text}*/}
                                            {/*</TableCell>*/}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Paper>
                    )}
                </Grid>
            </div>
        );
    }

    getAllCities = () => {
        agent.Agent.cityList()
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
