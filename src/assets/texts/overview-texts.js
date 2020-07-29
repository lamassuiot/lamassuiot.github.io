import React from 'react';

import { Typography } from '@material-ui/core';
import { HexagonMultipleOutline, LockOutline, VectorLink, FastForwardOutline } from 'mdi-material-ui';

export const heroText = {
    "title": "Why Lamassu",
    "subtitle": "The growth in Internet of Things will far exceed that of other connected devices. Each IoT unit is a potential entry point for an attack. Lamassu IoT is the solution to secure IoT deployments.",
    "modal": <q>By 2020, the IoT will have expanded at fast rate, resulting in a population of about 26 billion units. More than a quarter of attacks on companies will involve connected devices by 2020.</q>,
    "quote": "GARTNER INC."
}

export const sectionText = {
    "components":[{
        "id": 1,
        "title": "Lamassu is effective",
        "body": "IoT deployments involve a volume and velocity far beyond traditional PKI deployments. To achieve these high volume scenarios, the PKI services are exposed via effective APIs for automation. These APIs allow for certificate issuance and revocation, certificate look-up, and certificate revocation status acquisition. Usage of widely adopted standards facilitates integration and interoperability with other enterprise IT systems.",
        "icon": <HexagonMultipleOutline style={{height:"100%", width:"80%"}}></HexagonMultipleOutline>
    },{
        "id": 2,
        "title": "Lamassu is secure",
        "body": "Certificates status information is maintained in an scalable, low-latency and fault-tolerant keystore. Private keys are securely stored in a FIPS 140-2 compliant cryptography module. Extension points allow for using third-party modules such as propietary software, smartcard devices or hardware cryptographic accelerators.",
        "icon": <LockOutline style={{height:"100%", width:"80%"}}></LockOutline>
    }, {
        "id": 3,
        "title": "Lamassu is IoT",
        "body": "Lamassu IoT deals with the heterogeneity and scale of IoT. Differs from standard PKIs by allowing for longer certificate validity periods, stronger crypto algorithms and key sizes, higher performing algorithms like ECC, shorter root hierarchies, and so on.",
        "icon": <VectorLink style={{height:"100%", width:"80%"}}></VectorLink>
    }, {
        "id": 4,
        "title": "Lamassu is fast",
        "body": "HTTP servers, MQTT brokers, or in-house developed IoT gateways need to access to certificates to implement security services. Often these gateways are required to process requests in real time or near real time, for example, to predict that a financial transaction is experiencing fraud. Sin the data itself establishes its integrity, certificate data access is designed to minimize query response time.",
        "icon": <FastForwardOutline style={{height:"100%", width:"80%"}}></FastForwardOutline>
    }]
}

export const cardText = {
    "title": <Typography variant="h3" style={{color:"white"}}>What Lamassu can do</Typography>
}