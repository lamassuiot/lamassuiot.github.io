import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { SectionGridItem } from '.';


export function SectionGrid(props) {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {props.sectionText.components.map((component) => 
                    <SectionGridItem icon={component.icon} title={component.title} body={component.body}/>
                )}
            </Grid>
        </Container>
    );
}

SectionGrid.propTypes = {
    sectionText: PropTypes.object.isRequired
}