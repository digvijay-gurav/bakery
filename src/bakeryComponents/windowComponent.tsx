import React from "react";

const WindowComponent: React.FC<{ isDay: Boolean, showCookie: Boolean }> = ({
  isDay,
  showCookie,
}) => {
  function showCookieWindow() {
    if (isDay) {
      return (
        <div
          className={
            showCookie ? "showWindow windowMain" : "showCookie windowMain"
          }
        ></div>
      );
    } else {
      return <div className="noCookies windowMain">No cookies possible</div>;
    }
  }
  return <div>{showCookieWindow()}</div>;
};

export default WindowComponent;
