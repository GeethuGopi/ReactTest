import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    const [heading,setHeading] = useState("Register card form") 
    const [isBurgerIcon,setIsBurgerIcon] = useState(true)

    const handleStateOne = () => {
        setHeading("Menu");
        setIsBurgerIcon(false)
    }

    const handleStateTwo = () => {
        setHeading("Register card form");
        setIsBurgerIcon(true)
    }
    return(
        <div>
            <header>
                <AppBar position="static" >
                    <div className="heading">
                        <h3>{heading}</h3>
                    </div>
                    { isBurgerIcon ? (
                        <Toolbar>
                            <Link to="/Menu">
                                <IconButton  aria-label="menu" onClick={handleStateOne} >
                                    <MenuIcon style={{color:'#fff'}} /> 
                                </IconButton>
                            </Link>
                        </Toolbar>) : (<Toolbar>
                            <Link to="/">
                                <IconButton aria-label="menu" onClick={handleStateTwo} >
                                    <KeyboardBackspaceIcon style={{color:'#fff'}}/>
                                </IconButton>
                            </Link>
                        </Toolbar>)
                    }
                </AppBar>
            </header>
        </div>
    )
}

export default NavBar;