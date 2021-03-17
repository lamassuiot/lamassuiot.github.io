import { makeStyles } from '@material-ui/core/styles';

import { grey } from '@material-ui/core/colors';


export const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    icon: {
        color: grey[900]
    },
    listItemNested: {
        paddingLeft: theme.spacing(4)
    }
}));
