import React from "react";

function PhotoCard(props) {
  return (
    <div>
      <img src={props.url} alt="Space" />
    </div>
  );
}

export default PhotoCard;
