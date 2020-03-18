import React from 'react';
import { Header, Body, Footer } from '..';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrangeBringToFront } from 'mdi-material-ui';

const useStyles = makeStyles(theme => ({
    iconHeader: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "Scalability",
    "subtitle": "Lamassu IoT PKI architecture is horizontally scalable in order to manage increasing database volumes by adding more nodes.",
    "subcomponents": []
}

const bodyText = {
    "components": []
}

export function Scalability(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<ArrangeBringToFront className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}