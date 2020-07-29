import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    listItemNested: {
        paddingLeft: theme.spacing(4)
    }
}));
