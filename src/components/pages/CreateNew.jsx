import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const CreateNew = () => {
  return (
    <Box component='form'
      sx={{
        m: {md:"80px 0 0 240px", xs:'40px 0 0 0'},
        width: {md:"calc(100% - 240px)", xs:'100%'},
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField sx={{width:{xs:'350px' ,md:'600px'}, mb:'20px'}} id="outlined-basic1" label="Title" variant="outlined" />
      <TextField sx={{width:{xs:'350px' ,md:'600px'}, mb:'20px'}} id="outlined-basic2" label="Amount" variant="outlined" />
      <Button sx={{width:{xs:'200px' ,md:'400px'} }} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default CreateNew;
