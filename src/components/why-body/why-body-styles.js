import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    divider: {
        border: `1px solid ${theme.palette.text.primary}`
    }
}));