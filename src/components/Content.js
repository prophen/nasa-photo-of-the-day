import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Dimmer, Loader } from "semantic-ui-react";

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
  const { date, explanation, title, url } = data;

  return !url ? (
    <Dimmer active>
      <Loader indeterminate>Fetching the photo of the day</Loader>/>
    </Dimmer>
  ) : (
    <div>
      <Header url={url} date={date} title={title} explanation={explanation} />
      <Footer />
    </div>
  );
}

export default Content;
