import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HomeCity from 'mdi-material-ui/HomeCity';
import Api from 'mdi-material-ui/Api';
import RadioTower from 'mdi-material-ui/RadioTower';
import Cloud from 'mdi-material-ui/Cloud';
import OpenSourceInitiative from 'mdi-material-ui/OpenSourceInitiative';
import ArrangeBringToFront from 'mdi-material-ui/ArrangeBringToFront';
import ServerSecurity from 'mdi-material-ui/ServerSecurity';
import {CardItem} from '.';

const cardItemText = {
    "components":[{
        "title": "In-House PKI",
        "body": "Flexible In-house PKI for configuring, expanding and managing certificates.",
        "to": "/inhousepki",
        "icon": <HomeCity style={{height:60, width:60, margin:"auto"}}></HomeCity>
    },{
        "title": "Open Source",
        "body": "Being an Open Source software, Lamassu IoT allows organizations to freely evolve it to cope with their specific needs.",
        "to": "/opensource",
        "icon": <OpenSourceInitiative style={{height:60, width:60, margin:"auto"}}></OpenSourceInitiative>
    }, {
        "title": "API",
        "body": "PKI services are exposed via effective APIs for automation.",
        "to": "/api",
        "icon": <Api style={{height:60, width:60, margin:"auto"}}></Api>
    }, {
        "title": "IoT",
        "body": "Lamassu IoT deals with the heterogeneity and scale of IoT deployments.",
        "to": "/iot",
        "icon": <RadioTower style={{height:60, width:60, margin:"auto"}}></RadioTower>
    }, {
        "title": "Cloud",
        "body": "Lamassu IoT is designed to run on both commodity hardware and cloud infrastructure.",
        "to": "/cloud",
        "icon": <Cloud style={{height:60, width:60, margin:"auto"}}></Cloud>
    }, {
        "title": "Scalability",
        "body": "Lamassu IoT can be easily scaled by adding more nodes.",
        "to": "/scalability",
        "icon": <ArrangeBringToFront style={{height:60, width:60, margin:"auto"}}></ArrangeBringToFront>
    }, {
        "title": "Fault Tolerance",
        "body": "Hardware failure is the norm rather than the exception. Lamassu IoT offers detection of faults and quick and automatic recovery.",
        "to": "/faulttolerance",
        "icon": <ServerSecurity style={{height:60, width:60, margin:"auto"}}></ServerSecurity>
    }]
}

export function CardList(props) {
    return (
        <Box mb={4} mt={4} bgcolor={props.bgcolor}>
            <Container maxWidth="lg">
                <Box pt={2} pb={3}>
                    {props.cardText.title}
                </Box>
                <Grid container spacing={4} justify="center" alignItems="stretch">
                {cardItemText.components.map((component) => 
                    <CardItem key={component.to} to={component.to} xs={12} sm={6} md={6} lg={3} icon={component.icon} bodyTitle={component.title} bodyContent={component.body}/>

                )}
                </Grid>  
            </Container>
        </Box>
    );
}

CardList.propTypes = {
    cardText: PropTypes.object.isRequired
}
