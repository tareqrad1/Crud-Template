import { Box, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import PaperCards from './PaperCards';
import axios from 'axios';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Home = () => {
  const [dataAxios, setDataAxios] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/myData')
    .then((response) => {
      setDataAxios(response.data)
    })
    .catch((error) => {
      alert('error'+error)
    })
  },[]);
  

  let totalPrice = 0;
    return (
    <Box sx={{position:'relative' ,ml:{xs:'0', md:'240px'}, display:'flex', alignItems:'center', flexDirection:'column' , mt:'50px'}}>
        {
          dataAxios.map((data) => {
            totalPrice += data.priceData
            return (
              <PaperCards {...{dataAxios,setDataAxios,data}} key={data.id}/>
            )
          })
        }
        <Typography variant="h1" sx={{position:'absolute',top:'-39px',right:'30px',fontSize:'19px',display:'flex',userSelect:'none',letterSpacing:'1px'}}><LocalGroceryStoreIcon sx={{mr:'0px'}}/> Total:{totalPrice}<span style={{fontWeight:'bold',marginLeft:'1px'}}>$</span></Typography>
    </Box>
  )
}

export default Home


  //كل ميصير تغير على المتغير هاد .. بصير تغير على الداتا من كل الموقع 
