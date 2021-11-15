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
      <div className="grid-container">
        <div className="item1">
          <Header />
        </div>
        <div className="item2">
          <Profile />
        </div>
        <div className="item3">
          <About />
        </div>
        <div className="item4">
          <Feed />
        </div>
        <div className="item5">
          <FriendSuggestion />
        </div>
      </div>

  <Container>
    <Row>
      <Col><Header /></Col>
    </Row>
    <Row>
      <Col><Profile /></Col>
  
      <Col><Feed /></Col>
      <Col><FriendSuggestion /></Col>
    </Row>
    <Row>
      <Col><About /></Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>

    </React.Fragment>
  );
}

export default App;
