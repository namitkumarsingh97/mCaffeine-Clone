import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import "./Card.css";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="140" image={props.img} alt="coffee" />
      <CardContent className="card-back">
        <Typography variant="body2" color="text.secondary">
          <p>{props.rating}</p>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <h5>{props.title}</h5>
        </Typography>
        <Typography>
          <h5>{props.price}</h5>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="card-back">
        <Button />
      </CardActions>
    </Card>
  );
}
