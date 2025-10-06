import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Card/card.css"


// Reusable Card Component
export function MyCard({ title, image ,price ,desc}) {
   const navigate = useNavigate();
  return (
    <Card className="all-cards mb-5 text-center" style={{borderRadius: "10px",margin:"10px"  }} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="170" image={image} />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
         {desc}
        </Typography>
         <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>
      </CardContent>
      <CardActions className="d-flex border-btn justify-content-center align-items-center">
       
        <Button onClick={() => navigate("/order", { state: { productName: title } })}  style={{backgroundColor:"#FF4B2B"}} className="text-center  text-light   p-2" size="small">Order Now</Button>
      </CardActions>
    </Card>
  );
}

