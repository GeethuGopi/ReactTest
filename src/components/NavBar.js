import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return(
        <div>
        <header>
        <AppBar position="static" >
        <Toolbar>
            <IconButton color="inherit" aria-label="menu" >
            <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    </header>
    
        </div>
    )
}

export default NavBar;