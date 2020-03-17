import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    heroButtons: {
        border: `1px solid black`,
        borderRadius: 0
    }
}));

export function Hero(props) {
    const classes = useStyles();
    return (
        <Box bgcolor="background.paper" pt={8} pb={6} px={0}>
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
                            <Button component={Link} to="/overview" variant="outlined" size="large" className={classes.heroButtons}>
                                Why Lamassu
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/manufacturing" variant="outlined" size="large" className={classes.heroButtons}>
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