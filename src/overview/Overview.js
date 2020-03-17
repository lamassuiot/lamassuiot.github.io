import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Hero, SectionGrid } from '.';
import { CardList } from '../card';
import HexagonMultipleOutline from 'mdi-material-ui/HexagonMultipleOutline';
import LockOutline from 'mdi-material-ui/LockOutline';
import VectorLink from 'mdi-material-ui/VectorLink';
import FastForwardOutline from 'mdi-material-ui/FastForwardOutline';

const heroText = {
    "title": "Why Lamassu",
    "subtitle": "Lamassu PKI IoT enables connected devices and applications to securely exchange data over networks. Linear scalability and fault-tolerance on commodity hardware or cloud infrastructure make it the perfect solution for securing large and mission critical deployments.",
    "modal": "Ex duo fugit aliquando complectitur. In elit reque possit mea, eos possim debitis ne. Pri ne enim menandri. Sea inani exerci ad, ea has vide honestatis. Doming aliquando inciderint te est, sit no vitae discere."
}

const sectionText = {
    "components":[{
        "title": "Lamassu IoT is effective",
        "body": "IoT deployments involve a volume and velocity far beyond traditional PKI deployments. To achieve these high volume scenarios, the PKI services are exposed via effective APIs for automation. These APIs allow for certificate issuance and revocation, certificate look-up, and certificate revocation status acquisition. Usage of widely adopted standards facilitates integration and interoperability with other enterprise IT systems.",
        "icon": <HexagonMultipleOutline style={{height:"100%", width:"80%"}}></HexagonMultipleOutline>
    },{
        "title": "Lamassu IoT is secure",
        "body": "Certificates status information is maintained in an scalable, low-latency and fault-tolerant keystore. Private keys are securely stored in a FIPS 140-2 compliant cryptography module. Extension points allow for using third-party modules such as propietary software, smartcard devices or hardware cryptographic accelerators.",
        "icon": <LockOutline style={{height:"100%", width:"80%"}}></LockOutline>
    }, {
        "title": "Lamassu IoT is IoT",
        "body": "Lamassu IoT deals with the heterogeneity and scale of IoT. Differs from standard PKIs by allowing for longer certificate validity periods, stronger crypto algorithms and key sizes, higher performing algorithms like ECC, shorter root hierarchies, and so on.",
        "icon": <VectorLink style={{height:"100%", width:"80%"}}></VectorLink>
    }, {
        "title": "Lamassu IoT is fast",
        "body": "Lamassu IoT deals with the heterogeneity and scale of IoT deployments.",
        "icon": <FastForwardOutline style={{height:"100%", width:"80%"}}></FastForwardOutline>
    }, {
        "title": "Lamassu IoT is more than a PKI",
        "body": "HTTP servers, MQTT brokers, or in-house developed IoT gateways need to access to certificates to implement security services. Often these gateways are required to process requests in real time or near real time, for example, to predict that a financial transaction is experiencing fraud. Sin the data itself establishes its integrity, certificate data access is designed to minimize query response time."
    }]
}

const cardText = {
    "title": <Typography variant="h3" style={{color:"white"}}>What Lamassu can do</Typography>
}

export function Overview() {
    return (
        <React.Fragment>
            <Hero heroText={heroText}/>
            <SectionGrid sectionText={sectionText}/>
            <CardList cardText={cardText} bgcolor="text.primary"/>
        </React.Fragment>
    );
}