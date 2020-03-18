import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function SectionGridItem(props) {
    return (
        <Grid item xs={12} sm={6} md={6} lg={6}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h3">
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} spacing={4}>
                    <Grid item xs={5} sm={3} md={3} lg={3}>
                        <Box display="flex" alignItems="center" alignContent="center" height="100%" width="100%">
                            {props.icon}
                        </Box>                    
                    </Grid>
                    <Grid item xs={7} sm={9} md={9} lg={9}>
                        <Typography variant="body2">
                            {props.body}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

SectionGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    body: PropTypes.string.isRequired
}