import React from 'react';

import { Container } from '@material-ui/core';
import { RadioTower } from 'mdi-material-ui';

import Header from '../../components/why-header';
import Body from '../../components/why-body';
import { useStyles } from './iot-styles';
import { headerText, bodyText } from '../../assets/texts/iot-texts';

export default function IoT(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header headerText={headerText} icon={<RadioTower className={classes.iconHeader}/>}/>
                <Body bodyText={bodyText}/>
            </Container>
        </React.Fragment>
    )
}