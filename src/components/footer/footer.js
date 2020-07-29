import React from 'react';
import { Typography, Link, Container, Grid } from '@material-ui/core';

import { useStyles } from './footer-styles';
 

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="xs">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" align="center" gutterBottom>
                                Sponsored by:
                            </Typography>
                        </Grid>
                        <Grid item container xs={6} align="center" spacing={1}>
                            <Grid item xs={12} className={classes.gridItemLKS}/>
                            <Grid item xs={12}>
                                <Link align="center" variant="body2" color="textSecondary" href="https://www.lksnext.com/es/">LKS Next</Link>
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} align="center" spacing={1}>
                            <Grid item xs={12} className={classes.gridItemSPRI}/>
                            <Grid item xs={12}>
                                <Link align="center" variant="body2" color="textSecondary" href="https://www.spri.eus/en/">SPRI Group</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {'Copyright © '}{new Date().getFullYear()}{' Lamassu.'}
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
        </footer>
    );
}
