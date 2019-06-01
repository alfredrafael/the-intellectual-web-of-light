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
            <Card className="card">
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">
                  Intellectual Dark... what?
                </CardTitle>
                {/*   <CardSubtitle>Card subtitle</CardSubtitle> */}

                <img
                  width="100%"
                  src="https://i.imgur.com/cDP6ZnX.jpg"
                  alt="Card image cap"
                />

                <CardSubtitle>{/* Card subtitle */}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="4">
            <Card className="card">
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">
                  Figures
                </CardTitle>
                <img
                  width="100%"
                  src="https://secure.meetupstatic.com/photos/event/7/c/e/6/600_474871974.jpeg"
                  alt="Card image cap"
                />

                <CardSubtitle>{/* Card subtitle */}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" sm="4">
            <Card className="card">
              <CardBody className="cardBody">
                <CardTitle className="cardTitle">
                  Concepts
                </CardTitle>
                <img
                  width="100%"
                  src="https://i.imgur.com/iJxqhHv.jpg"
                  alt="Card image cap"
                />
                <CardSubtitle>{/* Card subtitle */}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fade>
    </div>
  );
};

export default Choices;
