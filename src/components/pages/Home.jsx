import { Box} from '@mui/material'
import React from 'react'
import PaperCards from './PaperCards';

const Home = () => {
  return (
    <Box sx={{ml:{xs:'0', md:'240px'}, display:'flex', alignItems:'center', flexDirection:'column' , mt:'50px'}}>
        <PaperCards />
        <PaperCards />
        <PaperCards />
    </Box>
  )
}

export default Home