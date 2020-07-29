import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './cloud-deployment-item-styles';
import LogoKubernetes from '../../assets/images/logo_kubernetes.png';
import LogoDocker from '../../assets/images/logo_docker.png'

export default function DeploymentItem(props){
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Typography variant="subtitle1">{props.body}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Grid container direction="column" spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img src={LogoKubernetes} alt="Kubernetes Logo" className={classes.kubernetesIcon}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img src={LogoDocker} alt="Docker Logo" className={classes.dockerIcon}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}