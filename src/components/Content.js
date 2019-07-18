import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import Footer from "./Footer";
import Header from "./Header";
import {UIButton} from './Semantic'

import axios from "axios";



function Content() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=NaDKW71DdbEag92yr5GiiBxlSSQ8Xi0PhIn2Pkv6"
      )
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  const { date, explanation, title,  url } = data;
  

  
  return !url ? (
    <p>Fetching the photo of the day</p>
  ) : (

    <div>
      <Header url={url}/>

      <h2>{title}</h2>
      <h3>{date}</h3>
      <UIButton />
      <PhotoCard url={url} />
      <p>{explanation}</p>
      <Footer />
    </div>
  );
}

export default Content;
