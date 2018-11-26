import React, {Component} from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const forecast = this.props.forecast;
        console.log(forecast);
        return <div>
            <Paper className={classes.root} elevation={1}>
                <img src={forecast.imageUrl}/>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        </div>
    }
}
export default withStyles(styles)(Forecast);