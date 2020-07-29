import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

import { useStyles } from './menu-styles';

export default function MenuBar(props){
    const classes = useStyles();
    return (
            <Menu anchorEl={props.menuAnchorEl} getContentAnchorEl={null} elevation={3} transformOrigin={{vertical: 'top', horizontal: 'right'}} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} keepMounted open={Boolean(props.menuAnchorEl)} onClose={props.clickMenu} className={classes.menu}>
                {props.options.map((option) => 
                    <MenuItem key={option.to} component={Link} to={option.to} onClick={props.clickMenuItem} className={classes.menuItem}>
                        {option.title}
                    </MenuItem>
                )}
            </Menu>  
    );
}

MenuBar.propTypes = {
    options: PropTypes.array.isRequired,
    menuAnchorEl: PropTypes.object,
    clickMenu: PropTypes.func.isRequired,
    clickMenuItem: PropTypes.func.isRequired
}

 