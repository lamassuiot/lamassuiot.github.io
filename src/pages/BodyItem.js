import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
}));

export function BodyItem(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h3">
                     {props.title}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Typography variant="subtitle1">
                    {props.text}
                </Typography>
            </Grid>
        </Grid>
    );
}

BodyItem.propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
}