import React from 'react';
import { Typography, Link, Container, Grid, Divider, IconButton } from '@material-ui/core';

import { Twitter as TwitterIcon, Email as EmailIcon, GitHub as GitHubIcon } from '@material-ui/icons/';

import { useStyles } from './footer-styles';
 

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Grid container>
                                <Grid item xs={11}>
                                    <Typography variant="subtitle2" align="center" gutterBottom>
                                        Sponsored by:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container align="center">
                                        <Grid item xs={5}>
                                            <Grid container>
                                                <Grid item xs={6} className={classes.gridItemLKS}/>
                                                <Grid item xs={6} className={classes.gridItemIndaba}/>
                                                <Grid item xs={6}>
                                                    <Link align="center" variant="body2" color="textSecondary" href="https://www.lksnext.com/es/">LKS Next</Link>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Link align="center" variant="body2" color="textSecondary" href="http://www.indaba.es/">Indaba</Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Divider orientation="vertical"/>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Grid container>
                                                <Grid item xs={12} className={classes.gridItemSPRI}/>
                                                <Grid item xs={12}>
                                                    <Link align="center" variant="body2" color="textSecondary" href="https://www.spri.eus/en/">SPRI Group</Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle2" align="right" gutterBottom>
                                        Contact information
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={11}>
                                            <Typography variant="body2" align="right">
                                                lamassuiot
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton className={classes.icon} component="a" href="https://github.com/lamassuiot">
                                                <GitHubIcon fontSize="small"/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={11}>
                                            <Typography variant="body2" align="right">
                                                @lamassuiot
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton className={classes.icon} component="a" href="https://twitter.com/lamassuiot">
                                                <TwitterIcon fontSize="small"/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={11}>
                                            <Typography variant="body2" align="right">
                                                lamassuiot@indaba.es
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton className={classes.icon} component="a" href="mailto:lamassuiot@indaba.es">
                                                <EmailIcon fontSize="small"/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary" align="right">
                                {'Copyright © '}{new Date().getFullYear()}{' Lamassu.'}
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
        </footer>
    );
}
