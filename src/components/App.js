import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from "./Header";
import Profile from "./Profile";
import About from "./AboutMe";
import Feed from "./Feed";
import FriendSuggestion from "./FriendSuggestion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App(){
  return ( 
    <React.Fragment>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col>
            <Row>
            <Profile />
            </Row>
            <Row>
            <About />
            </Row>
          </Col>
          <Col xs={6}><Feed /></Col>
          <Col xs={3}><FriendSuggestion /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
