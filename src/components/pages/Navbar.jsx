import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import PhotoAvatar from '../images/WhatsApp Image 2022-10-20 at 20.09.21.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'

const Navbar = ({setBlockOrnone, setClose}) => {
  function handleClick() {
    setBlockOrnone('block');
    setClose('temporary');
  }
  return (
    <Box sx={{ flexGrow: 1 }} component='nav'>
      <AppBar position="static" sx={{width:{xs:'100%', md:'calc(100% - 240px)'}, ml: {xs:'0', md:'240px'}}}>
        <Toolbar>
            <IconButton sx={{display:{md:'none'}}} onClick={handleClick } >
            <MenuIcon sx={{cursor:'pointer'}} />
            </IconButton>
            <Link to='/home' style={{textDecoration:'none', color:'white',flexGrow:1,fontWeight:"bold"}}>My Experience</Link>
            <Typography variant="p" component="p" sx={{mr:1}}>Tareq Radi</Typography>
            <Avatar alt="Remy Sharp" src={PhotoAvatar}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
