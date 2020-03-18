import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';

export function NoMatch() {
    return (
        <Container fixed>
            <Box mt={4} bgcolor="text.disabled" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center" textAlign="center">
                <Typography variant="h3">Page not found</Typography>
                <Typography variant="subtitle1">The page you are looking for doesn't exist or has been removed</Typography>
            </Box>
        </Container>
        
    );
}