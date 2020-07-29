import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Box } from '@material-ui/core';

import CardItem from './components/item';
import { cardItemText } from '../../assets/texts/card-list-texts';

export default function CardList(props) {
    return (
        <Box mb={4} mt={2} bgcolor={props.bgcolor}>
            <Container maxWidth="lg">
                <Box pt={2} pb={3}>
                    {props.cardText.title}
                </Box>
                <Grid container spacing={4} justify="center" alignItems="stretch">
                {cardItemText.components.map((component) => 
                    <CardItem key={component.to} to={component.to} xs={12} sm={6} md={6} lg={3} icon={component.icon} bodyTitle={component.title} bodyContent={component.body}/>

                )}
                </Grid>  
            </Container>
        </Box>
    );
}

CardList.propTypes = {
    cardText: PropTypes.object.isRequired
}
