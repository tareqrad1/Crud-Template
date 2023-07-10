import { Box, Typography} from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import PaperCards from './PaperCards';

const Home = () => {
  return (
    <Box sx={{ml:'240px', display:'flex', alignItems:'center', flexDirection:'column' , mt:'50px'}}>
        <PaperCards />
        <PaperCards />
        <PaperCards />
    </Box>
  )
}

export default Home