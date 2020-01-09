import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HouseContainer from "../components/HousesContainer";

const Houses = () => {
  return (
    <>
      <Hero hero="housesHero">
        <Banner title="our houses">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <HouseContainer />
    </>
  );
};

export default Houses;
