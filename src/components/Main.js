import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";

import axios from "axios";
import { async } from "q";

function Main() {
  const [data, setData] = useState({});
  

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=NaDKW71DdbEag92yr5GiiBxlSSQ8Xi0PhIn2Pkv6")
    .then(response => {
      setData(response.data)
 
    })
    .catch(error => console.error(error));
    
  },[])
  console.log(data.url)
  return (
    <div className="photo-card">
      <PhotoCard url={data.url}/>
    </div>
  );

}

export default Main;
