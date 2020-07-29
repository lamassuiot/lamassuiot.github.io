import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles( theme => ({
    menu: {
        marginTop: "14px",
    },
    menuItem: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        width: "200px",
        
    }
}));