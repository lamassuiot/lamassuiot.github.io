import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './in-house-security-item-styles';

import SecurityCompliance from '../../assets/images/security_compliance.png';

export default function SecurityModelItem(props){
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={5} sm={5} md={5} lg={5}>
                <img src={SecurityCompliance} alt="Security Compliance" className={classes.securityIcon}/>
            </Grid>
            <Grid item xs={7} sm={7} md={7} lg={7}>
                <Typography variant="subtitle1">{props.body}</Typography>
            </Grid>
        </Grid>
    )
}