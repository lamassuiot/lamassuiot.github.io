import React from 'react';
import PropTypes from 'prop-types';

import { Container, Divider } from '@material-ui/core';

import BodyItem from './components/item';
import { useStyles } from './why-body-styles';

export default function Body(props){
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Divider className={classes.divider}/>
            {props.bodyText.components.map((component)=>
                <React.Fragment>
                    <BodyItem title={component.title} element={component.element}/>
                    <Divider className={classes.divider}/>
                </React.Fragment>
            )}
        </Container>
    );
}

Body.propTypes = {
    bodyText: PropTypes.object.isRequired
}