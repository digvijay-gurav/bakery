import React, { useState } from "react";
import { Col, Toast } from "react-bootstrap";

import WindowComponent from "./windowComponent";
import DoorComponent from "./doorComponent";
import "./bakeryComponent.css";

interface Iprops {
  isDay: boolean;
}
const BakeryComponent: React.FC<Iprops> = ({ isDay }) => {
  const [showCookie, setShowCookie] = useState(true);
  const [dropMailBox, setDropMailBox] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNotPlaced, setNoOrderPlaced] = useState(false);
  function toggleShowCookie() {
    setShowCookie(!showCookie);
  }
  function mailBoxClick() {
    setDropMailBox(!dropMailBox);
  }

  return (
    <div className="bakeryComponentMain">
      <div className="roofMain"></div>
      <div className="nameBoardMain">
        <div className="nameBoardTitle">Cookie Bakery</div>
      </div>
      <div className="bakeryRoom">
        <Col className="componentColumn">
          <div
            onMouseLeave={toggleShowCookie}
            onMouseEnter={toggleShowCookie}
            className="windowComponentWrapper"
          >
            <WindowComponent
              showCookie={showCookie}
              isDay={isDay}
            ></WindowComponent>
          </div>
        </Col>
        <Col className="componentColumn">
          <DoorComponent
           isDay={isDay}
           setOrderPlaced={setOrderPlaced}
           setNoOrderPlaced={setNoOrderPlaced}></DoorComponent>
        </Col>
        <Col className="componentColumn">
          <div
            onMouseLeave={toggleShowCookie}
            onMouseEnter={toggleShowCookie}
            className="windowComponentWrapper"
          >
            <WindowComponent
              showCookie={showCookie}
              isDay={isDay}
            ></WindowComponent>
          </div>
          <div
            className={
              dropMailBox ? "mailBoxContainer mailBoxExt" : "mailBoxContainer"
            }
            onClick={mailBoxClick}
          >
            <div className="mailBoxWrapper">
              <div className="letterDrop"></div>
              <div className="mailBoxLabel">MailBox</div>
            </div>
          </div>
        </Col>
      </div>
        <Toast className="toastPosition" show={orderPlaced}>
          <Toast.Body>Your order has been placed.</Toast.Body>
        </Toast>
        <Toast className="toastPosition" show={orderNotPlaced}>
          <Toast.Body>Something went wrong. Try again later.</Toast.Body>
        </Toast>
    </div>
  );
};

export default BakeryComponent;
