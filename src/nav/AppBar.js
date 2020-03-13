import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {MenuBar, MenuMobileBar} from '.';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    appbar: {
        padding: 0
    },
    menuPaper: {
        backgroundColor: theme.palette.background.default
    },
    menu: {
        width: "180px",
    },
    menuButton: {
        height: "100%",
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    grow: {
        flexGrow: 1,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
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
                "to": "/to"
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
        "options": []
    },
    "Contact": {
        "title": "Contact",
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
                    <Typography variant="h6" noWrap className={classes.title}>Lamassu</Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                    <Button variant="text" onClick={handleWhyClick} endIcon={<ArrowDropDownIcon/>}>{navText["Why Lamassu"].title}</Button>
                    <Button variant="text" endIcon={<ArrowDropDownIcon/>} onClick={handleLearnClick}>{navText.Learn.title}</Button>
                    <Button variant="text">{navText.Support.title}</Button>
                    <Button variant="text">{navText.Contact.title}</Button>
                    </div>
                        <div className={classes.sectionMobile}>
                            <IconButton onClick={handleMobileMenuOpen} color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            <MenuBar options={navText["Why Lamassu"].options} menuAnchorEl={whyAnchorEl} clickMenu={handleWhyClose} clickMenuItem={handleWhyClose}/>
            <MenuBar options={navText.Learn.options} menuAnchorEl={learnAnchorEl} clickMenu={handleLearnClose} clickMenuItem={handleLearnClose}/>
            <MenuMobileBar options={navText} menuAnchorEl={mobileAnchorEl} mobileClose={handleMobileMenuClose} handleWhy={handleWhyClick} handleLearn={handleLearnClick}/>
        </div>
    );
}
