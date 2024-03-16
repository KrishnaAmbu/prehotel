import React from 'react'

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';


const Homee = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
            <AppBar component={"nav"} sx={{bgcolor:"black"}}>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} align='left'  fontFamily='fantasy' variant='h6'>
                      <RestaurantRoundedIcon/>
                      &nbsp;kapilavastu</Typography>
                  
                    <Button><Link to='Signout' style={{color:'white'}}>Sign-out</Link></Button>
                    <Button><Link to='history' style={{color:'white'}}>Order History</Link></Button>
                    <Button><Link to='cart' style={{color:'white'}}>Cart</Link></Button>
                    {/* <Button><Link to='/review'>Review</Link></Button> */}
                    
                </Toolbar>
            </AppBar>
        </Box>
       
    </div>

  )
}



export default Homee
