import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Avatar, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { MoreVert as MoreIcon, ArrowDropDown as ArrowDropDownIcon, GitHub as GitHubIcon } from '@material-ui/icons';

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

    const handleLearnClose = () => {
        setLearnAnchorEl(null);
        setMobileAnchorEl(false);
    }

    const handleGithub = () => {
        window.open('https://github.com/lamassuiot', '_blank')
    }

    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0} square>
                <Toolbar>
                    <Avatar component={Link} to="/" variant="square" alt="Lamassu Logo" src={LogoLamassu}></Avatar>
                    <Typography variant="h6" noWrap className={classes.typoAppBarTitle}>Lamassu</Typography>
                    <div className={classes.divGrow}/>
                    <div className={classes.divSectionDesktop}>
                    <Button component={Link} to={navText.Overview.to} variant="text">{navText.Overview.title}</Button>
                    <Button variant="text" onClick={handleWhyClick} endIcon={<ArrowDropDownIcon/>}>{navText["Why Lamassu"].title}</Button>
                    <IconButton className={classes.icon} aria-label="Lamassu GitHub" component="span" onClick={handleGithub}>
                        <GitHubIcon/>
                    </IconButton>
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
