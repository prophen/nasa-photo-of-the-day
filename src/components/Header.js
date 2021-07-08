import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Header(props) {
  const divStyle = {
    backgroundImage: `url('${props.url}')`
  };
  const [isHidden, setIsHidden] = useState(false);

  return (
    <header style={divStyle}>
      <h1>NASA photo of the day</h1>
      <div className={isHidden ? "hide" : ""}>
        <h2>{props.title}</h2>
        <p>Date: {props.date}</p>
        <p>{props.explanation}</p>
        <Button className="ui button" onClick={() => setIsHidden(true)}>
          hide this text
        </Button>
      </div>
    </header>
  );
}

export default Header;
