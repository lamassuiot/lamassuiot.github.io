import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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