import React from 'react'
import {Typography} from '@mui/material'
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
const PaperCards = () => {
  return (
    <Paper sx={{width: {xs:'70%',md:'450px'}, display: 'flex', justifyContent:'space-between' , p:'25px' ,position: 'relative', mb: '20px'}}>
            <Typography variant='h6'>Gym</Typography>
            <Typography variant='h6'>300$</Typography>
            <CloseIcon sx={{position: 'absolute', right: '-1px', top: '-1px', opacity: .8, cursor:'pointer'}}/>
    </Paper>
  )
}

export default PaperCards;