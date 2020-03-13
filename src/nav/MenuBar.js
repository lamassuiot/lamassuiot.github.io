import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export function MenuBar(props){
    return (
            <Menu anchorEl={props.menuAnchorEl} getContentAnchorEl={null} elevation={0} transformOrigin={{vertical: 'top', horizontal: 'right'}} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} keepMounted open={Boolean(props.menuAnchorEl)} onClose={props.clickMenu}>
                {props.options.map((option) => 
                    <MenuItem component={Link} to={option.to} divider onClick={props.clickMenuItem}>
                        {option.title}
                    </MenuItem>
                )}
            </Menu>  
    );
}

 