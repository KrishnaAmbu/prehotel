import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Review = () => {
 
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0); 

  
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Submitted Review:', { comment, rating });
   
    setComment('');
    setRating(0);
  };

  return (
   
    <div>
        <h1>  </h1>
        <h1>  </h1>
        <h1>  </h1>
       
  <div class="card-body">
      <h2>Leave a Review!</h2>
            
            <h1>  </h1>
            <h1>  </h1>
            <h1>  </h1>
            Serives:<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <h1></h1>
            Food:<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <h1></h1>
            Overall Experience:<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <h1></h1>
                <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="comment">Comment:</label>
                <TextField style={{size:'20px'}}
                    id="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    required
                /><br></br>
                </div>
            <h1></h1>

            <Button variant='contained'>Submit</Button>
            </form>
            <h1></h1>
      </div> 

      {
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        KAPILAVASTU
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          About Us
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Contact Us
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         kapilavastu@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
        Corporate Office
        kapilavastu Products Private Limited No.45-A, 2nd Phase, Peenya Industrial
Area Bengaluru-560 058, Karnataka
          <br />
        </Typography>
      </CardContent>
     
    </Card>
}
    </div>
    
  );
};

export default Review
