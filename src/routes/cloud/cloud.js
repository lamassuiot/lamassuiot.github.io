import React from 'react';

import { Container } from '@material-ui/core';
import { Cloud } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import { useStyles } from './cloud-styles';
import { headerText, bodyText } from '../../assets/texts/cloud-texts';

export default function CloudPage(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<Cloud className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
            </Container>
        </React.Fragment>
    )
}