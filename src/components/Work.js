import '../App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// Code referenced from https://mui.com/material-ui/react-card/

export default function Work(props) {

  return (
    <a href={props.web}>
    <Card sx={{ width: 500, height: 480}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="370"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}

