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
      <Container className={classes['about__container']}>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, ipsum
          neque distinctio reiciendis veritatis voluptatem repellendus
          perspiciatis deserunt ducimus, et tempore eaque quas veniam? Culpa
          ipsa tempora amet iste minus. Atque natus esse culpa sed facilis,
          temporibus fugit provident consequatur facere reprehenderit nihil
          itaque, dolorem, beatae animi commodi! Similique modi aut assumenda
          doloremque facere voluptatum, quia quis accusamus exercitationem,
          provident suscipit nisi iure! Ipsum quod nam dignissimos repellendus
          labore! Suscipit rerum repudiandae beatae laboriosam sit maxime
          consequatur enim labore architecto id iste exercitationem deserunt et,
          facilis, repellat ut, cum harum. Quia dignissimos excepturi quis neque
          veniam saepe nulla fugit amet ullam, ad eum aspernatur dicta ratione
          quidem labore consequuntur, tempore quam recusandae quasi fugiat
          laboriosam vel! Reprehenderit consectetur dicta laudantium provident
          dolorem sed nam numquam nesciunt culpa. Iste sed ducimus sequi vero
          provident facilis inventore aut accusantium, labore nobis saepe
          repellat eum recusandae autem maxime sapiente aliquam dolor, dolores
          voluptatum ratione quo. Beatae repellendus, sint qui molestias
          architecto eaque doloribus expedita similique cumque dolor eligendi
          nobis corporis quibusdam maxime perferendis sed totam praesentium
          molestiae nisi minima recusandae adipisci?
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
