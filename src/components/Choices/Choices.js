import React from "react";
import Fade from "react-reveal/Fade";
import "./Choices.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from "reactstrap";

const Choices = props => {
  return (
    <div className="choicesContainer">
      <Fade>
        <Row>
          <Col md="4" sm="4">
            <Card>
              <CardBody className='cardBody'>
                <CardTitle>What is the Intellectual Dark Web?</CardTitle>
              {/*   <CardSubtitle>Card subtitle</CardSubtitle> */}
              </CardBody>
              <img
                width="100%"
                src="https://i.imgur.com/cDP6ZnX.jpg"
                alt="Card image cap"
              />
              <CardBody className='cardBody'>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="4">
            <Card>
            <CardBody className='cardBody'>
            <CardTitle>Who are the greatest exponents of the intellectual dark web?</CardTitle>
              {/*   <CardSubtitle>Card subtitle</CardSubtitle> */}
              </CardBody>
              <img
                width="100%"
                src="https://secure.meetupstatic.com/photos/event/7/c/e/6/600_474871974.jpeg"
                alt="Card image cap"
              />
              <CardBody className='cardBody'>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="4">
            <Card>
            <CardBody className='cardBody'>
            <CardTitle>What are the central concepts of the intellectual Dark Web</CardTitle>
              {/*   <CardSubtitle>Card subtitle</CardSubtitle> */}
              </CardBody>
              <img
                width="100%"
                src="https://i.imgur.com/iJxqhHv.jpg"
                alt="Card image cap"
              />
              <CardBody className='cardBody'>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

export default Choices;
