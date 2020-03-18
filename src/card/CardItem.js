import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Divider, Box, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        textAlign: "center",
        width: "100%",
        height: "100%"
    },
    cardTitle: {
        fontWeight: "bold"
    }
    
}));

export function CardItem(props) {
    const classes = useStyles();
    return (
        <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
            <CardActionArea className={classes.card} component={Link} to={props.to}>
                <Card className={classes.card}>
                    <CardContent>
                        {props.icon}
                        <Divider light/>
                        <Box pt={2} pb={1} px={3}>
                            <Typography variant="h6" className={classes.cardTitle} gutterBottom>
                                {props.bodyTitle}
                            </Typography>
                            <Typography variant="body1">
                                {props.bodyContent}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

CardItem.propTypes = {
    bodyTitle: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    bodyContent: PropTypes.string.isRequired
}