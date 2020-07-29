import React from 'react';

import CardList from '../components/card-list';
import Hero from '../components/home-hero';
import Section from '../components/home-section';
import Quote from '../components/home-quote';
import { heroText, cardText, sectionText } from '../assets/texts/home-texts';

export default function Home() {
    return (
        <React.Fragment>
            <Hero heroText={heroText}/>
            <CardList cardText={cardText}/>
            <Section sectionText={sectionText}/>
            <Quote/>
        </React.Fragment>
    );
}
