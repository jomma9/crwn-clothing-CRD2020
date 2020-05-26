import React from "react";

import "./home-style.scss";
import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/Directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
