import React from 'react';

import { List, ListItemIcon, ListItem, ListItemText, Typography } from '@material-ui/core';
import { DoneOutlineOutlined as DoneOutlineOutlinedIcon } from '@material-ui/icons/';
import SecurityModelItem from '../../components/in-house-security-item';

export const headerText = {
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
export const bodyText = {
    "components": [{
        "title": "A PKI consists of",
        "element": <List>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="A certificate authority (CA) that stores, issues and signs digital certificates."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="A registration authority which verifies the identity of entities requesting their digital certificates to be stored at the CA."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="A secure central directory in which to store and index keys."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="A certificate management system managing things like the access to stored certificates or the delivery of the certificates to be issued."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="A certificate policy."/>
                        </ListItem>
                    </List>
    },
    {
        "title": "Lamassu IoT PKI functions",
        "element": <Typography variant="subtitle1">The PKI functions provided by Lamassu IoT includes certificate issuance and revocation, certificates status information maintenance, and publication of certificates and their revocation status.</Typography>
    },
    {
        "title": "Security model compliance",
        "element": <SecurityModelItem body="Lamassu IoT provides the core mechanisms for implementing authentication, authorization, confidentiality, and data integrity in our IoT deployments."/>
    }]
}