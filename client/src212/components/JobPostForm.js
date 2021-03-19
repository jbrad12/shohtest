import CarPostForm from './CarPostForm'
import DrivewayPostForm from './DrivewayPostForm'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function JobPostForm() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}><CarPostForm /></Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}><DrivewayPostForm /></Paper>
            </Grid>
        </Grid>
    )
}