import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const CreateNew = () => {
  return (
    <Box component='form'
      sx={{
        m: "80px 0 0 240px",
        width: "calc(100% - 240px)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField sx={{width:'600px', mb:'20px'}} id="outlined-basic" label="Title" variant="outlined" />
      <TextField sx={{width:'600px', mb:'20px'}} id="outlined-basic" label="Amount" variant="outlined" />
      <Button sx={{width:'500px' }} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default CreateNew;
