import React from 'react'

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';


const Admin = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
            <AppBar component={"nav"} sx={{bgcolor:"gold"}}>
                <Toolbar>
                    <Typography sx={{flexGrow:1}} align='left'  fontFamily='fantasy' variant='h6'>
                      <RestaurantRoundedIcon/>
                      &nbsp;kapilavastu</Typography>
                  
                    
                    <Button style={{color:"white",}}><Link to='/menu'>Menu Management </Link></Button>
                    <Button style={{color:"white",}}><Link to='/order'>Order Mnagaement </Link></Button>
                    <Button style={{color:"white",}}><Link to='/feed'>FeedBack</Link></Button>
                    <Button style={{color:"white",}}>Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>

  )
}




export default Admin
