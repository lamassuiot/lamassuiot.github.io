import React from 'react';

import { Typography } from '@material-ui/core';

export const headerText = {
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

export const bodyText = {
    "components": [{
        "title": "SCEP",
        "element": <Typography variant="subtitle1">When an X.509 certificate is issued there typically is a need for a certificate management protocol to enable a PKI client to request or renew a certificate from a Certificate Authority (CA). Simple Certificate Enrolment Protocol (SCEP) is a protocol that deals with this certificate management in an effective way by using CMS (formerly known as PKCS #7) and PKCS #10 over HTTP.</Typography>
    },
    {
        "title": "OCSP",
        "element": <Typography variant="subtitle1">OCSP is a useful protocol for determining the current status of a digital certificate wihout requiring Certificate Revocation Lists (CRLs). OCSP provides more timely revocation information than is possible in CRLs.</Typography>
    },
    {
        "title": "Interoperability",
        "element": <Typography variant="subtitle1">Usage of widely adopted standards facilitates integration and interoperability with other enterprise systems.</Typography>
    }
    ]
}