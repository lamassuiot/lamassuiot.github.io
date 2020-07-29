import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Card, CardContent, Typography, Divider, Box, CardActionArea } from '@material-ui/core'

import { useStyles } from './card-list-item-styles';

export default function CardItem(props) {
    const classes = useStyles();
    return (
        <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
            <CardActionArea className={classes.cardActionArea} component={Link} to={props.to}>
                <Card className={classes.card}>
                    <CardContent>
                        {props.icon}
                        <Divider/>
                        <Box pt={2} pb={1} px={3}>
                            <Typography variant="h6" className={classes.typoCardTitle} gutterBottom>
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