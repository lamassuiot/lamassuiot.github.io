import { makeStyles } from '@material-ui/core/styles';

import { grey } from '@material-ui/core/colors';


export const useStyles = makeStyles(theme => ({
    typoAppBarTitle: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
    },
    divSectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    icon: {
        color: grey[900]
    },
    divSectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    divGrow: {
        flexGrow: 1,
    },
}));