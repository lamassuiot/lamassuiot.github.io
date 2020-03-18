import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { SectionGridItem } from '.';


export function SectionGrid(props) {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {props.sectionText.components.map((component) => 
                    <SectionGridItem key={component.id} icon={component.icon} title={component.title} body={component.body}/>
                )}
            </Grid>
        </Container>
    );
}

SectionGrid.propTypes = {
    sectionText: PropTypes.object.isRequired
}