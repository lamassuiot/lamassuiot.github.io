import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    headerContent: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(6)
    },
    icon: {
        width: "100%",
        height: "60%", 
    }
}));

export function Header(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.headerContent}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h2" gutterBottom>
                                {props.headerText.title}
                            </Typography>
                            <Typography variant="subtitle1">
                                {props.headerText.subtitle}
                            </Typography>
                        </Grid>
                        {props.headerText.subcomponents.map((component) =>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Typography variant="h6" gutterBottom>
                                    {component.title}
                                </Typography>
                                <Typography variant="body2">
                                    {component.body}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box height="100%" width="100%">
                        {props.icon}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

Header.propTypes = {
    headerText: PropTypes.object.isRequired
}