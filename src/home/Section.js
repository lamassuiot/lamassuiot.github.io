import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

export function Section(props) {
    return (
        <Box mb={4}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Box borderRadius="borderRadius" boxShadow={1} height={260} width="100%" bgcolor="text.primary"></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                {props.sectionText.title}
                            </Typography>
                            <Divider light/>
                            <Typography variant="subtitle1" gutterBottom>
                                {props.sectionText.body1}
                            </Typography>
                            <Typography variant="subtitle1">
                                {props.sectionText.body2}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

Section.propTypes = {
    sectionText: PropTypes.object.isRequired
}