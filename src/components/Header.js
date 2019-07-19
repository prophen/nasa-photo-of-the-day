import React from "react";
function Header(props) {

const divStyle= {
  backgroundImage: `url('${props.url}')`
}

  return (
    <header style={divStyle}>
      <h1>NASA photo of the day</h1>
    </header>
  );
}

export default Header;
