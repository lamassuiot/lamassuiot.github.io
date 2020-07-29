import React from 'react';

import { Container, Typography, Grid, Box } from '@material-ui/core';
import { FormatQuote as FormatQuoteIcon } from '@material-ui/icons';

export default function Quote() {
    return (
        <Box>
            <Container maxWidth="sm">
                <Grid container spacing={0} direction="column" justify="center">
                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <FormatQuoteIcon fontSize="large"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign="center">
                            <Typography variant="h5" gutterBottom>
                                This is something similar to a quote
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, magna reque his cu, mel eu meis iudico ubique, ex delenit tacimates imperdiet nec. Eos principes disputando ad, ei mei eripuit accusam invenire.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}