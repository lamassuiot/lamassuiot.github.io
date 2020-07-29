import React from 'react';

import { Container } from '@material-ui/core';
import { ServerSecurity } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import Footer from '../../components/why-footer';
import { useStyles } from './fault-tolerance-styles';
import { headerText, bodyText } from '../../assets/texts/fault-tolerance-texts';

export default function FaultTolerance(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<ServerSecurity className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
                <Footer/>
            </Container>
        </React.Fragment>
    )
}