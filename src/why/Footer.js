import React from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export function Footer() {
    return (
        <Container maxWidth="lg">
            <Box textAlign="center" pt={6} mt={4} borderRadius="borderRadius" boxShadow={0} height={260} width="100%" bgcolor="text.disabled">
                <Box mx="auto">
                    <Typography variant="h3" gutterBottom>
                        Ready to get started?
                    </Typography>
                    <Button variant="outlined" size="large">
                        Get started
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}