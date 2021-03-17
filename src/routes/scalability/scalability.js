import React from 'react';

import { Container } from '@material-ui/core';
import { ArrangeBringToFront } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import { useStyles } from './scalability-styles';
import { headerText, bodyText } from '../../assets/texts/scalability-texts';

export default function Scalability(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<ArrangeBringToFront className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
            </Container>
        </React.Fragment>
    )
}