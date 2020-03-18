import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Cloud } from 'mdi-material-ui';
import { Header, Body, Footer } from '..';

const useStyles = makeStyles(theme => ({
    headerIcon: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "Cloud",
    "subtitle": "Lamassu IoT is a public key infrastructure for the Internet of Things designed to run on both commodity hardware and cloud infrastructure.",
    "subcomponents": [{
        "title": "Commodity hardware",
        "body": "Commodity hardware is a computer device or IT component that is relatively inexpensive, widely available and basically interchangeable with other hardware of its type."
    },
    {
        "title": "Cloud",
        "body": "Lamassu IoT PKI components are easy deployable and containerized using Docker technology."
    }]
}

const bodyText = {
    "components": []
}

export function CloudPage(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<Cloud className={classes.headerIcon}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}