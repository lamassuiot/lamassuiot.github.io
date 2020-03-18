import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ServerSecurity } from 'mdi-material-ui';
import { Header, Body, Footer } from '..';

const useStyles = makeStyles(theme => ({
    iconHeader: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "Fault tolerance",
    "subtitle": "A Lamassu IoT deployment consists of several server machines ideally spread across multiple datacenters or regions. Since each component has a non-trivial probability of failure, the architecture assumes that some component of Lamassu IoT is always non-functional. Therefore, detection of faults and quick, automatic recovery from them is a core architectural feature of Lamassu IoT.",
    "subcomponents": [{
        "title": "Persistency",
        "body": "No data is lost in case of power outage in one or both datacenters."
    },
    {
        "title": "Cross-datacenter replication",
        "body": "Data is replicated and synchronized between both data centers."
    }]
}

const bodyText = {
    "components": []
}

export function FaultTolerance(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<ServerSecurity className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}