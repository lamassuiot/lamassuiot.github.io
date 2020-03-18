import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert as MoreIcon, ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';

import {MenuBar, MenuMobileBar} from '.';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
    typoAppBarTitle: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    divSectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    divSectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    divGrow: {
        flexGrow: 1,
    },
}));

const navText = {
        "Why Lamassu": {
            "title": "Why Lamassu",
            "options": [{
                "title": "Overview",
                "to": "/overview"
            },
            {
                "title": "In House PKI",
                "to": "/inhousepki"
            },
            {
                "title": "Open Source",
                "to": "/opensource"
            },
            {
                "title": "API",
                "to": "/api"
            },
            {
                "title": "IoT",
                "to": "/iot"
            },
            {
                "title": "Cloud",
                "to": "/cloud"
            },
            {
                "title": "Scalability",
                "to": "/scalability"
            },
            {
                "title": "Fault Tolerance",
                "to": "/faulttolerance"
            }]
        },
    "Learn": {
        "title": "Learn",
        "key": "Learn",
        "options": [{
            "title": "Manufacturing",
            "to": "/manufacturing"
        },
        {
            "title": "Validation",
            "to": "/validation"
        }]
    },
    "Support": {
        "title": "Support",
        "to": "/support",
        "options": []
    },
    "Contact": {
        "title": "Contact",
        "to": "/contact",
        "options": []
    }}

export function LamassuAppBar() {
    const classes = useStyles();
    const [whyAnchorEl, setWhyAnchorEl] = useState(null);
    const [learnAnchorEl, setLearnAnchorEl] = useState(null);
    const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

    const handleWhyClick = event => {
        setWhyAnchorEl(event.currentTarget);
    }

    const handleMobileMenuOpen = () => {
        setMobileAnchorEl(true)
    }

    const handleMobileMenuClose = () => {
        setMobileAnchorEl(false);
    }

    const handleWhyClose = () => {
        setWhyAnchorEl(null);
        setMobileAnchorEl(false);
    }

    const handleLearnClick = event => {
        setLearnAnchorEl(event.currentTarget);
    }

    const handleLearnClose = () => {
        setLearnAnchorEl(null);
        setMobileAnchorEl(false);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Avatar component={Link} to="/" variant="square" alt="Lamassu Logo" src="lamassu_logo.png"></Avatar>
                    <Typography variant="h6" noWrap className={classes.typoAppBarTitle}>Lamassu</Typography>
                    <div className={classes.divGrow}/>
                    <div className={classes.divSectionDesktop}>
                    <Button variant="text" onClick={handleWhyClick} endIcon={<ArrowDropDownIcon/>}>{navText["Why Lamassu"].title}</Button>
                    <Button variant="text" endIcon={<ArrowDropDownIcon/>} onClick={handleLearnClick}>{navText.Learn.title}</Button>
                    <Button component={Link} to={navText.Support.to} variant="text">{navText.Support.title}</Button>
                    <Button component={Link} to={navText.Contact.to} variant="text">{navText.Contact.title}</Button>
                    </div>
                        <div className={classes.divSectionMobile}>
                            <IconButton onClick={handleMobileMenuOpen} color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            <MenuBar options={navText["Why Lamassu"].options} menuAnchorEl={whyAnchorEl} clickMenu={handleWhyClose} clickMenuItem={handleWhyClose}/>
            <MenuBar options={navText.Learn.options} menuAnchorEl={learnAnchorEl} clickMenu={handleLearnClose} clickMenuItem={handleLearnClose}/>
            <MenuMobileBar options={navText} menuAnchorEl={mobileAnchorEl} mobileClose={handleMobileMenuClose}/>
        </div>
    );
}
