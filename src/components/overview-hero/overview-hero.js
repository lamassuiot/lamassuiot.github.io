import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, Grid, Box } from '@material-ui/core';
import { useStyles } from './overview-hero-styles';

export default function Hero(props) {
    const classes = useStyles();
    return (
            <Box bgcolor="background.paper" pt={8} pb={6} mb={2} width="100%" className={classes.modalImage}>
                <Container maxWidth="lg">  
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={5}>
                            <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                                {props.heroText.title}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.typography}>
                                {props.heroText.subtitle}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Box p={3} borderLeft={2} width="100%">
                                    <Typography variant="h6" paragraph>
                                        {props.heroText.modal}
                                    </Typography>  
                                    <Typography variant="subtitle2">
                                        {props.heroText.quote}
                                    </Typography>
                            </Box>                        
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    );
}

Hero.propTypes = {
    heroText: PropTypes.object.isRequired
}