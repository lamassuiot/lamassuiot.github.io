import React from 'react';

import { Container } from '@material-ui/core';
import { Api } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import Footer from '../../components/why-footer';
import { useStyles } from './api-styles';
import { headerText, bodyText } from '../../assets/texts/api-texts';

export default function ApiPage(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<Api className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}