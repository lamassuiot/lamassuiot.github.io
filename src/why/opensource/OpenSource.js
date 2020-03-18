import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { OpenSourceInitiative } from 'mdi-material-ui';
import { Header, Body, Footer } from '..';

const useStyles = makeStyles(theme => ({
    headerIcon: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "Open Source",
    "subtitle": "Being an Open Source software, Lamassu IoT allows organizations to freely evolve it to cope with their specific needs. Open Source development offers the potential for a more flexible technology and quicker innovation. On the other hand, with propietary solutions, organizations must rely on the vendor to modify and adapt the software for their own business requirements.",
    "subcomponents": []
}

const bodyText = {
    "components": []
}

export function OpenSource(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<OpenSourceInitiative className={classes.headerIcon}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}