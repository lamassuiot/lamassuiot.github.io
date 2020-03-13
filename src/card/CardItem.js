import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


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

