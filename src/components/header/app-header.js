import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Avatar, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { MoreVert as MoreIcon, ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';

import MenuBar from './components/menu';
import MenuMobileBar from './components/mobile';
import { useStyles } from './app-header-styles';
import { navText } from '../../assets/texts/app-header-texts';
import LogoLamassu from '../../assets/images/logo_lamassu.png';

export default function LamassuAppHeader() {
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
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0} square>
                <Toolbar>
                    <Avatar component={Link} to="/" variant="square" alt="Lamassu Logo" src={LogoLamassu}></Avatar>
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
        </React.Fragment>
    );
}
