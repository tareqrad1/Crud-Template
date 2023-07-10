import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import PhotoAvatar from '../images/WhatsApp Image 2022-10-20 at 20.09.21.jpg'
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{width:'calc(100% - 240px)', ml: '240px'}}>
        <Toolbar>
            <Link to='/home' style={{textDecoration:'none', color:'white',flexGrow:1,fontWeight:"bold"}}>My Experience</Link>
            <Typography variant="p" component="p" sx={{mr:1}}>Tareq Radi</Typography>
            <Avatar alt="Remy Sharp" src={PhotoAvatar}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
