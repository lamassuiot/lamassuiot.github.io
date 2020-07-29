import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './why-body-item-styles';

export default function BodyItem(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h3">
                     {props.title}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                {props.element}
            </Grid>
        </Grid>
    );
}

BodyItem.propTypes = {
        title: PropTypes.string.isRequired,
        element: PropTypes.object.isRequired
}