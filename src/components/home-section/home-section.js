import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Typography, Box } from '@material-ui/core';

import { useStyles } from './home-section-styles';

export default function Section(props) {
    const classes = useStyles();

    return (
        <Box mb={4}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justify="center">
                    <Grid item xs={10} sm={10} md={7} lg={7} className={classes.gridItem}>
                        <Box>
                            <Typography variant="h4" className={classes.typoSectionTitle} gutterBottom>
                                {props.sectionText.title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {props.sectionText.body1}
                            </Typography>
                            <Typography variant="subtitle1">
                                {props.sectionText.body2}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

Section.propTypes = {
    sectionText: PropTypes.object.isRequired
}