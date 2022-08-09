import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ContactFooter from "../../components/ContactFooter";

import classes from "./About.module.scss";
import Container from "../../layout/Container";

const About = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Container className={classes["about__container"]}>
        <p className={classes["about__text"]}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          eaque labore eligendi animi laboriosam, tenetur, error harum nobis
          aliquam cum in id quae porro impedit dignissimos illum unde! Natus,
          accusamus!
        </p>
        <p className={classes["about__text"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          ullam quam aspernatur libero magnam repellendus nesciunt pariatur, in
          non dolorum consectetur voluptatem officia eveniet impedit eligendi
          enim modi optio. Dolore ipsam veritatis assumenda culpa accusamus
          perferendis eius corporis aliquid eligendi. Dolores dicta id optio
          atque perferendis ab quas officia? Vitae distinctio animi repellendus
          repudiandae odit voluptas sed eos adipisci velit fuga maiores culpa
          fugiat officia a odio laboriosam assumenda quod, debitis modi labore
          expedita! Quos placeat quam perferendis mollitia hic aut cum facere
          nihil? Ratione magnam velit nihil quidem inventore magni tenetur ut
          optio cum est ducimus, itaque facilis aut, odit sapiente commodi!
          Modi, dolore consectetur corrupti fugit ducimus laudantium?
        </p>
        <p className={classes["about__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid
          repellat commodi voluptas reprehenderit deserunt ducimus totam cumque
          ea sed alias numquam fugit pariatur, vitae mollitia. Dolores,
          suscipit?
        </p>
        <p className={classes["about__text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          impedit quibusdam vero numquam exercitationem. A quo enim tempora
          asperiores, officia veritatis, nostrum minima voluptates nemo eveniet,
          consectetur iusto reiciendis nesciunt aliquam nisi id commodi ad quae
          corrupti omnis necessitatibus consequatur. Itaque, minima voluptatum!
          Voluptatibus qui quos sequi porro nesciunt rem illum omnis minus nam
          quidem praesentium tenetur unde laboriosam commodi nostrum ipsum
          laborum, culpa officia repudiandae necessitatibus vitae maiores
          pariatur est? Soluta, fugit repudiandae tenetur unde error neque
          consequatur molestias alias accusamus perspiciatis recusandae quod
          ipsum. Omnis rerum illo dolorum.
        </p>
      </Container>
      <ContactFooter />
    </>
  );
};

export default About;
