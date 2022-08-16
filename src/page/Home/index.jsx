import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ContactFooter from "../../components/ContactFooter";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
      </main>
      <ContactFooter />
    </>
  );
};

export default Home;
