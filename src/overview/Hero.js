import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export function Hero(props) {
    return (
            <React.Fragment>
                    <Box bgcolor="background.paper" pt={8} pb={6} width="100%">
                        <Container maxWidth="lg">  
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={5}>
                                    <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                                        {props.heroText.title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {props.heroText.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <Box borderRadius="borderRadius" boxShadow={1} height={260} width="100%" bgcolor="text.primary"></Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justify="center">
                                        <Grid item xs={8}>
                                            <Box mt={-6} p={3} bgcolor="#81c784" boxShadow={1} width="100%">
                                                <Typography variant="h6">
                                                    {props.heroText.modal}
                                                </Typography>  
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Container>
                    </Box>
            </React.Fragment>
    );
}
