import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const CreateNew = () => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  // 
  function postData(e) {
    let params = {
      titleData: title,
      priceData: price,
    }
    axios.post('http://localhost:9000/myData',params,{
      headers: {
        'Content-Type': 'application/json'
      },
    })
    handleClick()
}
// 
  
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
      <TextField  onChange={(e) => setTitle(e.target.value === null ? e.preventDefault() : e.target.value)} sx={{width:{xs:'350px' ,md:'600px'}, mb:'20px'}} id="outlined-basic1" label="Title" variant="outlined" />
      <TextField onChange={(e) => setPrice(Number(e.target.value))} sx={{width:{xs:'350px' ,md:'600px'}, mb:'20px'}} id="outlined-basic2" label="Amount" variant="outlined" />
      <Button onClick={postData}  sx={{width:{xs:'200px' ,md:'400px'} }} variant="contained" endIcon={<SendIcon />}>Send</Button>


      {/* alert bottom */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%', bgColor:'red' }}>
          This is a success message!
        </Alert>
      </Snackbar> 
    </Box>
  );
};

export default CreateNew;
