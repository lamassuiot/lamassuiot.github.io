import React from 'react';
import { Typography } from '@material-ui/core';
import { Hero, Section, Quote } from '.'
import { CardList } from '../card';

const heroText = {
    "title": "Lamassu IoT",
    "subtitle": "A public key infrastructure (PKI) for the Internet of Things (IoT) designed to run on both commodity hardware and cloud infrastructure."
}

const sectionText = {
    "title": "Exchange data securely over the network",
    "body1": "Lamassu PKI IoT enables connected devices and applications to securely exchange data over networks.",
    "body2": "Linear scalability and fault-tolerance on commodity hardware or cloud infrastructure make it perfect solution for securing large and mission critical deployments."
}

const cardText = {
    "title": <Typography variant="h3">What Lamassu can do</Typography>
}

export function Home() {
    return (
        <React.Fragment>
            <Hero heroText={heroText}/>
            <CardList cardText={cardText}/>
            <Section sectionText={sectionText}/>
            <Quote/>
        </React.Fragment>
    );
}
