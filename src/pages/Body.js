import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {BodyItem} from '.';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    divider: {
        border: `1px solid ${theme.palette.text.primary}`
    }
}));


export function Body(props){
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Divider className={classes.divider}/>
            {props.bodyText.components.map((component)=>
                <React.Fragment>
                    <BodyItem title={component.title} text={component.body}/>
                    <Divider className={classes.divider}/>
                </React.Fragment>
            )}
        </Container>
    );
}

Body.propTypes = {
    bodyText: PropTypes.object.isRequired
}