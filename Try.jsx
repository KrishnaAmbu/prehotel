import { Button } from '@mui/base'
import React from 'react'
import { Typography } from '@mui/material'
import { TextField }from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function Try() {
  return (
  <div>

<h1>Today's Top Selling Specials</h1>
<h1>Today's Top Selling Specials</h1>
  <div class="card-group">
     
  <div class="card" style={{ border: '1px solid black', borderRadius: '4px', padding: '20px', marginBottom: '20px' ,marginTop:'20px',marginLeft:'200px',marginRight:'200px'}}>

    <img class="card-img-top" src="https://www.abhibus.com/blog/wp-content/uploads/2023/09/Must-Try-Rajasthan-Famous-Food.jpg" alt="Card image cap" style={{ width: '1000px', height: '600px' }}/>
    <div class="card-body">
      <h5 class="card-title">Thali Meals</h5>
      <p class="card-text">Thali (meaning "plate" or "tray") or Bhojanam (meaning "full meal") is a round platter used to serve food in South Asia, Southeast Asia and the Caribbean. Thali is also used to refer to an Indian-style meal made up of a selection of various dishes which are served on a platter. Thali is also used in south Asia for ceremonial purposes.</p>
     
      <Button style={{color:"black",size:'40px'}} variant="contained">  Order  </Button>
    </div>
  </div>
  <div class="card" style={{ border: '1px solid black', borderRadius: '4px', padding: '20px', marginBottom: '20px' ,marginTop:'20px',marginLeft:'200px',marginRight:'200px'}}>
    <img class="card-img-top" src="https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg" alt="Card image cap" style={{ width: '1000px', height: '600px' }} />
    <div class="card-body">
      <h5 class="card-title">Penne Pasta</h5>
      <p class="card-text">A two-inch long, tube-shaped pasta that is cut diagonally at both ends. Great with chunky meat or vegetable sauces, as bits of the meat or veggies will slide into the pasta tubes. Similar to the smoother mostaccioli, also called Penne Lisce.</p>
      
      <Button style={{color:"black",size:'40px'}}>  Order  </Button>
    </div>
  </div>
  <div class="card" style={{ border: '1px solid black', borderRadius: '4px', padding: '20px', marginBottom: '20px' ,marginTop:'20px',marginLeft:'200px',marginRight:'200px'}}>
    <img class="card-img-top" src="https://cdn-img.mealme.ai/91d005a8492c5aa22e30a4b90e323d509501cc8c/68747470733a2f2f6d656469612d63646e2e677275626875622e636f6d2f696d6167652f75706c6f61642f716964626735366b6171687930736a67667474722e6a7067" alt="Card image cap" style={{ width: '1000px', height: '600px' }}/>
    
    <div class="card-body">
      <h5 class="card-title">Zinger Beef</h5>
      <p class="card-text">Burger, a food consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.</p>
     
      <Button style={{color:"black",size:'40px'}} variant='contained'>  Order  </Button>
    </div>
  </div>
  </div>
  
  </div>
  )
}
export default Try