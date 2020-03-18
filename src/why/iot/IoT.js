import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RadioTower } from 'mdi-material-ui';
import { Header, Body, Footer } from '..';

const useStyles = makeStyles(theme => ({
    iconHeader: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "IoT",
    "subtitle": "Lamassu IoT PKI deals with the heterogeneity and scale of IoT.",
    "subcomponents": [{
        "title": "What makes Lamassu an IoT PKI?",
        "body": "Lamassu IoT differs from standard PKIs by allowing for longer certificate validity periods, stronger crypto algorithms and key sizes, higher performing algorithms like ECC and shorter root hierarchies."
    }]
}

const bodyText = {
    "components": []
}

export function IoT(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<RadioTower className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}