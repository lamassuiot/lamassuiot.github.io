import React from 'react';
import 'fontsource-roboto';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './routes';
import Overview from './routes/overview';
import InHouse from './routes/inhousepki';
import OpenSource from './routes/opensource';
import ApiPage from './routes/api';
import IoT from './routes/iot';
import CloudPage from './routes/cloud';
import Scalability from './routes/scalability';
import FaultTolerance from './routes/faulttolerance';
import Footer from './components/footer';
import NoMatch from './components/no-match';
import WIP from './components/work-in-progress';
import LamassuAppBar from './components/header';
import { ScrollToTop } from './utils/scroll-to-top';


const theme = createMuiTheme({
    palette: {
        background: {
            default: "#fff"
        },
        divider: "rgba(0,0,0,0.5)",
    }
})

render((
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <LamassuAppBar/>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/overview" component={Overview}/>
                <Route exact path="/inhousepki" component={InHouse}/>
                <Route exact path="/opensource" component={OpenSource}/>
                <Route exact path="/api" component={ApiPage}/>
                <Route exact path="/iot" component={IoT}/>
                <Route exact path="/cloud" component={CloudPage}/>
                <Route exact path="/scalability" component={Scalability}/>
                <Route exact path="/faulttolerance" component={FaultTolerance}/>
                <Route exact path="/manufacturing" component={WIP}/>
                <Route exact path="/validation" component={WIP}/>
                <Route exact path="/support" component={WIP}/>
                <Route exact path="/contact" component={WIP}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
            <Footer/>
        </ThemeProvider>
    </BrowserRouter>
  ), document.getElementById('root'))