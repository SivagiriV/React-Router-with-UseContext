import React,{useContext} from 'react';
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import { userContext } from '../../App';
// import Login from '../Login';

export default function ButtonAppBar() {
 const {name}=useContext(userContext)
  const classes = useStyles();
  return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} align="left">
                    Home
                </Typography>
                <Link to="/login" className={classes.button}>
                    <Button color="inherit">Login/SignUp</Button>
                </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.div}>
                <Typography variant="h4">
                    Get Started
                </Typography>
                <Button variant="contained" color="primary" align="center" style={{width:"200px",height:"60px"}}>Welcome {name}</Button>
            </div>
        </div>
  );
}
