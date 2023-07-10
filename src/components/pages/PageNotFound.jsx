import React from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Box } from "@mui/material";
const PageNotFound = () => {
  return (
    // <h1 style={{marginLeft:'240px'}}></h1>
    <>
    <Box sx={{ml:'240px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' ,height:'calc(100vh - 64px)', userSelect:'none'}}>
      <NewReleasesIcon sx={{fontSize:'100px',color:'red', mb:'5px'}}/>
      <h1 style={{color:'red'}}>Page Are Not Found Now!</h1>
    </Box>
    </>
  );
};

export default PageNotFound;
