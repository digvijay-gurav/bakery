import "./App.css";
import "./main.scss";
import React, { useState } from "react";

import SunComponent from "./sunComponent";
import BakeryComponent from "./bakeryComponents/bakeryComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App: React.FC<{}> = ({}) => {
  const [isDay, setIsDay] = useState(true);
  return (
    <div className="App">
      <Container fluid className={isDay ? "dayModeOn" : "dayModeOff"}>
        <Row>
          <Col></Col>
          <Col>
            <SunComponent isDay={isDay} setIsDay={setIsDay}></SunComponent>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <BakeryComponent isDay={isDay}></BakeryComponent>
        </Row>
      </Container>
    </div>
  );
};

export default App;
