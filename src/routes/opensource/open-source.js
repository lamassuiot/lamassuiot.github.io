import React from 'react';

import { Container } from '@material-ui/core';
import { OpenSourceInitiative } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import Footer from '../../components/why-footer';
import { useStyles } from './open-source-styles';
import { headerText, bodyText } from '../../assets/texts/open-source-texts';

export default function OpenSource(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<OpenSourceInitiative className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}