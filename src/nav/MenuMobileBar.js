import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));


export function MenuMobileBar(props) {
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
                            {whyOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItem>
                    <Divider/>
                    <Collapse in={whyOpen} component="li" timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {props.options["Why Lamassu"].options.map((option) =>
                                <React.Fragment>
                                    <ListItem button component={Link} to={option.to} className={classes.nested}>
                                        <ListItemText primary={option.title}/>
                                    </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            )}
                        </List>
                    </Collapse>
                        <ListItem button variant="text" onClick={handleLearn}>
                            <ListItemText primary={props.options.Learn.title}/>
                            {learnOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                    <Divider/>
                    <Collapse in={learnOpen} component="li" timeout="auto" unmountOnExit>
                        <List disablePadding>
                            {props.options.Learn.options.map((option) =>
                                <React.Fragment>
                                    <ListItem button component={Link} to={option.to} className={classes.nested}>
                                        <ListItemText primary={option.title}/>
                                    </ListItem>
                                    <Divider/>
                                </React.Fragment>
                            )}
                        </List>
                    </Collapse>
                        <ListItem>
                            <ListItemText primary={props.options.Support.title}/>
                        </ListItem>
                    <Divider/>
                        <ListItem>
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