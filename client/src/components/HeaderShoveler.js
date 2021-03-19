import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import icon from "../icons/shovel.svg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className="header">
            <h1>SNO' MORE</h1>
            <div className={classes.root} >
    <Avatar className={classes.purple} ></Avatar>
                <Avatar className={classes.purple}>U</Avatar>

            </div>
        </div>
    )
}