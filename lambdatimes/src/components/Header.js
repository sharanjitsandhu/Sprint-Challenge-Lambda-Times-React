import React from "react";
import * as moment from "moment";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const now = moment().format("MMMM D YYYY, h:mm A");
const day = moment().format("dddd");

const Header = () => {
  return (
    <div className="header">
      <span className="date">{now}</span>
      <span className="date">{day}</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  );
};

export default Header;
