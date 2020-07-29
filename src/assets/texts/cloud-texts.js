import React from 'react';

import DeploymentItem from '../../components/cloud-deployment-item';

export const headerText = {
    "title": "Cloud",
    "subtitle": "Lamassu IoT is a public key infrastructure for the Internet of Things designed to run on both commodity hardware and cloud infrastructure.",
    "subcomponents": [{
        "title": "Commodity hardware",
        "body": "Commodity hardware is a computer device or IT component that is relatively inexpensive, widely available and basically interchangeable with other hardware of its type."
    },
    {
        "title": "Cloud",
        "body": "Lamassu IoT PKI components are easily deployable in top Cloud Service Providers."
    }]
}

export const bodyText = {
    "components": [{
        "title": "Deployment",
        "element": <DeploymentItem body="In order to homogenize the deployment task in different solutions, Lamassu IoT uses Docker container technology and the Kubernetes orchestrator. In this way, the process of deploying containers in a local Kubernetes cluster or in a managed cloud one is similar."/>
    }]
}