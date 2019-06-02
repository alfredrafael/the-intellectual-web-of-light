import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Row, Col, Container} from 'reactstrap'

import Fade from 'react-reveal/Fade';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
      <Container>
      <Fade>
      <Row style={{margin: '5% auto', textAlign: 'center'}}>
      <Col md='4' className='growEffect'>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/cDP6ZnX.jpg"
          title="person wondering"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Definition
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A definition of what is the "Intellectual Dark Web" and how it came to exist.
            Lorem ipsum so it takes more space

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Col>
    <Col md='4'>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secure.meetupstatic.com/photos/event/7/c/e/6/600_474871974.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Main figures
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An exploration of different personalities that have emerged in this philosophical atmosphere
            Lorem ipsum so it takes more space
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Col>
    <Col md='4'>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/iJxqhHv.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Main concepts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An account of the main topics covered in the so called intellectual dark web
            Lorem ipsum so it takes more space

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Col>
    </Row>
    </Fade>
    </Container>
    
  );
}

export default MediaCard;