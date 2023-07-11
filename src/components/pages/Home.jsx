import { Box, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import PaperCards from './PaperCards';
import axios from 'axios';

const Home = () => {
  const [dataAxios, setDataAxios] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/myData')
    .then((response) => {
      setDataAxios(response.data)
    })
    .catch((error) => {
      alert('error')
    })
  },[dataAxios])
  return (
    <Box sx={{ml:{xs:'0', md:'240px'}, display:'flex', alignItems:'center', flexDirection:'column' , mt:'50px'}}>
        {
          dataAxios.map((data,idx) => {
            return (
              <PaperCards data={data} key={data.id}/>
            )
          })
        }
    </Box>
  )
}

export default Home