import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, Typography, Grid, Button, Box } from '@material-ui/core'; 

import { useStyles } from './home-hero-styles';

export default function Hero(props) {
    const classes = useStyles();
    return (
        <Box bgcolor="background.paper" pt={10} pb={10} px={0} className={classes.image}>
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    {props.heroText.title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {props.heroText.subtitle}
                </Typography>
                <Box mt={4} textAlign="center">
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button component={Link} to="/overview" variant="outlined" size="large" className={classes.buttonHero}>
                                Why Lamassu
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/manufacturing" variant="outlined" size="large" className={classes.buttonHero}>
                                Learn
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

Hero.propTypes = {
    heroText: PropTypes.object.isRequired
}