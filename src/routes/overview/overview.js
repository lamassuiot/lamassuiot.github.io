import React from 'react';

import CardList from '../../components/card-list';
import Hero from '../../components/overview-hero';
import SectionGrid from '../../components/overview-grid';
import { heroText, sectionText, cardText } from '../../assets/texts/overview-texts';

export default function Overview() {
    return (
        <React.Fragment>
            <Hero heroText={heroText}/>
            <SectionGrid sectionText={sectionText}/>
            <CardList cardText={cardText} bgcolor="text.primary"/>
        </React.Fragment>
    );
}