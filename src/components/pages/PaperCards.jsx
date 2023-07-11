import React from 'react'
import {Typography, IconButton} from '@mui/material'
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
const PaperCards = ({data}) => {
  return (
    <Paper key={data.id} sx={{width: {xs:'70%',md:'450px'}, display: 'flex', justifyContent:'space-between' , p:'25px' ,position: 'relative', mb: '20px'}}>
            <Typography variant='h6'>{data.titleData}</Typography>
            <Typography variant='h6'>{data.priceData}</Typography>
            <IconButton sx={{position: 'absolute', right: '-20px', top: '-18px', opacity: .8, cursor:'pointer'}}>
              <CloseIcon />
            </IconButton>
    </Paper>
  )
}

export default PaperCards;