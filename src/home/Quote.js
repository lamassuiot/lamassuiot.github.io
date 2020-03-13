import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export function Quote() {
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