import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    menu: {
        marginTop: "14px",
    },
    menuItem: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        width: "200px",
        
    }
}));

export function MenuBar(props){
    const classes = useStyles();
    return (
            <Menu anchorEl={props.menuAnchorEl} getContentAnchorEl={null} elevation={3} transformOrigin={{vertical: 'top', horizontal: 'right'}} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} keepMounted open={Boolean(props.menuAnchorEl)} onClose={props.clickMenu} className={classes.menu}>
                {props.options.map((option) => 
                    <MenuItem component={Link} to={option.to} onClick={props.clickMenuItem} className={classes.menuItem}>
                        {option.title}
                    </MenuItem>
                )}
            </Menu>  
    );
}

 