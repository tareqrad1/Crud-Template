import React from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Box, Typography } from "@mui/material";
const PageNotFound = () => {
  return (
    // <h1 style={{marginLeft:'240px'}}></h1>
    <>
    <Box sx={{ml:{xs:'0', md:'240px'}, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' ,height:'calc(100vh - 64px)', userSelect:'none'}}>
      <NewReleasesIcon sx={{fontSize:'100px',color:'red', mb:'5px'}}/>
      <Typography variant="h1" sx={{color:'red', fontSize:'30px', fontWeight:'900'}} >Page Are Not Found Now!</Typography>
    </Box>
    </>
  );
};

export default PageNotFound;
