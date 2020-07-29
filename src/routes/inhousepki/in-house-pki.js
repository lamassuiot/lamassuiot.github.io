import React from 'react';

import { Container } from '@material-ui/core';
import { HomeCity } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import Footer from '../../components/why-footer';
import { useStyles } from './in-house-pki-styles';
import { headerText, bodyText } from '../../assets/texts/in-house-pki-texts';

export default function InHouse(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<HomeCity className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}