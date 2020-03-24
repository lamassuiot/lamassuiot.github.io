import React from 'react';
import { Typography, Link, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4,0),
        marginTop: theme.spacing(4)
    },
    gridItemLKS: {
        height: "60px",
        backgroundImage: "url(logo_lks.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    },
    gridItemSPRI: {
        backgroundImage: "url(logo_spri.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    },
    avatarLamassu: {
        width: "50px",
        height: "50px"
    },
    gridItemLamassu: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    gridItemIcons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    typoLamassuTitle: {
        marginLeft: theme.spacing(1),
    },
    icon: {
        width: "50px",
        height: "50px",
        marginRight: theme.spacing(1)
    }
}));

export function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="xs">
                    <Grid container pacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" align="center">
                                Sponsored by:
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.gridItemLKS}>
                        </Grid>
                        <Grid item xs={6} className={classes.gridItemSPRI}>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {'Copyright © '}
                                <Link color="inherit" href="#">
                                {new Date().getFullYear()}
                                {'.'}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
        </footer>
    );
}
