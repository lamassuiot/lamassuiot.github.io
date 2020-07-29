import { makeStyles } from '@material-ui/core/styles';

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