import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Home } from './home';
import { Footer } from './footer';
import { Overview, InHouse, OpenSource, ApiPage, IoT, CloudPage, Scalability, FaultTolerance } from './why';
import CssBaseline from '@material-ui/core/CssBaseline';
import {LamassuAppBar} from './nav';
import {ScrollToTop, NoMatch, WIP} from './utils';

render((
    <BrowserRouter>
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
    </BrowserRouter>
  ), document.getElementById('root'))