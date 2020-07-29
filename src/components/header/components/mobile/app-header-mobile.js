import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Collapse } from '@material-ui/core';
import { ChevronRight as ChevronRightIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon} from '@material-ui/icons';

import { useStyles } from './app-header-mobile-styles';

export default function MenuMobileBar(props) {
    const classes = useStyles();
    
    const [whyOpen, setWhyOpen] = useState(false);
    const [learnOpen, setLearnOpen] = useState(false);

    const handleWhy = () => {
        setWhyOpen(!whyOpen);
    }

    const handleLearn= () => {
        setLearnOpen(!learnOpen);
    }

    return (
        <Drawer open={props.menuAnchorEl} onClose={props.mobileClose} variant="persistent" elevation={0} anchor="right">
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.mobileClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider/>
            <div>
                <List>
                    <ListItem button onClick={handleWhy}>
                        <ListItemText primary={props.options["Why Lamassu"].title}/>
                            {whyOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </ListItem>
                    <Divider/>
                    <Collapse in={whyOpen} component="li" timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {props.options["Why Lamassu"].options.map((option) =>
                                <React.Fragment key={option.to}>
                                    <ListItem button component={Link} to={option.to} className={classes.listItemNested}>
                                        <ListItemText primary={option.title}/>
                                    </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            )}
                        </List>
                    </Collapse>
                        <ListItem button variant="text" onClick={handleLearn}>
                            <ListItemText primary={props.options.Learn.title}/>
                            {learnOpen ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </ListItem>
                    <Divider/>
                    <Collapse in={learnOpen} component="li" timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {props.options.Learn.options.map((option) =>
                                <React.Fragment key={option.to}>
                                    <ListItem button component={Link} to={option.to} className={classes.listItemNested}>
                                        <ListItemText primary={option.title}/>
                                    </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            )}
                        </List>
                    </Collapse>
                        <ListItem button component={Link} to={props.options.Support.to}>
                            <ListItemText primary={props.options.Support.title}/>
                        </ListItem>
                    <Divider/>
                        <ListItem button component={Link} to={props.options.Contact.to}>
                            <ListItemText primary={props.options.Contact.title}/>
                        </ListItem>
                </List>
            </div>
        </Drawer>
    );
}

MenuMobileBar.propTypes = {
    options: PropTypes.object.isRequired,
    menuAnchorEl: PropTypes.bool,
    mobileClose: PropTypes.func.isRequired
}