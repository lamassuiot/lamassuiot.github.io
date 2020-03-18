import React from 'react';
import {Header, Body, Footer} from '..';
import { Container } from '@material-ui/core';
import HomeCity from 'mdi-material-ui/HomeCity';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    headerIcon: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "In House PKI",
    "subtitle": "Public Key Infrastructure is a powerful protection tool that has been protecting systems and services on the internet for 20 years. So it seems like a natural fit for securing our IoT deployments.",
    "subcomponents": [{
        "title": "What is a PKI?",
        "body": "A public key infrastructure (PKI) is a system for creation, storage and distribution of digital certificates which are used to verify that a particular public key belongs to a certain entity. The PKI creates digital certificates which map to public keys to entities, securely stores these certificates in a central repository and revokes them if needed."
    },{
        "title": "Why In House PKI?",
        "body": "By using a managed PKI, organizations need to pay per certificate. Thus, for those IoT deployments requiring large number of certificates, using a managed PKI is less cost-effective than establishing and managing an in-house PKI. Furthermore, managed PKIs are less flexible when configuring, expanding and managing certificates. Lamassu IoT is aimed at those IoT deployments where an in-house PKI is the best fit."
    }]
}

//Body in this case could be another component designed for that body page.
const bodyText = {
    "components": [{
        "title": "A PKI consists of",
        "body": "A certificate authority (CA) that stores, issues and signs digital certificates. A registration authority which verifies the identity of entities requesting their digital certificates to be stored at the CA. A secure central directory in which to store and index keys. A certificate management system managing things like the access to stored certificates or the delivery of the certificates to be issued. A certificate policy."
    },
    {
        "title": "Lamassu IoT PKI functions",
        "body": "The PKI functions provided by Lamassu IoT includes certificate issuance and revocation, certificates status information maintenance, and publication of certificates and their revocation status."
    },
    {
        "title": "Security model compliance",
        "body": "Lamassu IoT provides the core mechanisms for implementing authentication, authorization, confidentiality, and data integrity in our IoT deployments."
    }]
}

export function InHouse(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<HomeCity className={classes.headerIcon}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}