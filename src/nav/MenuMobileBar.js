import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));


export function MenuMobileBar(props) {
    const classes = useStyles();
    return (
        <Drawer open={props.menuAnchorEl} onClose={props.mobileClose} variant="persistent" elevation={0} anchor="right">
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.mobileClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button variant="text" onClick={props.handleWhy}>
                    <ListItemText primary={props.options["Why Lamassu"].title}/>
                </ListItem>
                <Divider/>
                <ListItem button variant="text" onClick={props.handleLearn}>
                    <ListItemText primary={props.options.Learn.title}/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary={props.options.Support.title}/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary={props.options.Contact.title}/>
                </ListItem>
            </List>
        </Drawer>
    );
}
