import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Api } from 'mdi-material-ui';
import { Header, Body, Footer } from '..';


const useStyles = makeStyles(theme => ({
    headerIcon: {
        width: "100%",
        height: "80%", 
    }
}));

const headerText = {
    "title": "API oriented PKI",
    "subtitle": "IoT deployments involve a volume and velocity far beyond traditional PKI deployments. To achieve these high volume scenarios, the PKI services are exposed via effective APIs for automation.",
    "subcomponents": [{
        "title": "Enrollment API",
        "body": "Enrollment API makes the issuing of certificates as scalable as possible, implementing the Simple Certificate Enrollment Protocol (SCEP). With SCEP, enterprise device management systems are able to request digital certificates electronically and in a simple way."
    },
    {
        "title": "Validation API",
        "body": "Online Certificate Status Protocol (OCSP) is used to implement the Validation API that allows applications to obtain the revocation status of a particular certificate."
    }]
}

const bodyText = {
    "components": [{
        "title": "SCEP",
        "body": "When an X.509 certificate is issued there typically is a need for a certificate management protocol to enable a PKI client to request or renew a certificate from a Certificate Authority (CA). Simple Certificate Enrolment Protocol (SCEP) is a protocol that deals with this certificate management in an effective way by using CMS (formerly known as PKCS #7) and PKCS #10 over HTTP."
    },
    {
        "title": "OCSP",
        "body": "OCSP is a useful protocol for determining the current status of a digital certificate wihout requiring Certificate Revocation Lists (CRLs). OCSP provides more timely revocation information than is possible in CRLs."
    }]
}

export function ApiPage(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<Api className={classes.headerIcon}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}