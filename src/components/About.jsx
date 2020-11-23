import React from "react";
import { useSelector } from "react-redux";
import Developers from "./Developers";

const About = () => {
  
  const developers = useSelector(({ developers }) => developers.developersList);

  return (
    <section className="about section">
      <div className="about__inner">
        <div className="about__info">
          <h2 className="about__title">About our group</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
            eget arcu dictum varius duis at. Sem nulla pharetra diam sit amet
            nisl suscipit adipiscing bibendum. Nunc pulvinar sapien et ligula
            ullamcorper malesuada proin libero nunc. Ligula ullamcorper
            malesuada proin libero nunc. Fermentum iaculis eu non diam phasellus
            vestibulum lorem sed. Risus sed vulputate odio ut enim blandit. Nunc
            aliquet bibendum enim facilisis. Ante metus dictum at tempor
            commodo. Ultrices tincidunt arcu non sodales neque sodales ut etiam
            sit. Tempus iaculis urna id volutpat lacus laoreet non. Parturient
            montes nascetur ridiculus mus mauris vitae ultricies leo. Quis
            commodo odio aenean sed adipiscing. In pellentesque massa placerat
            duis ultricies lacus sed turpis. Quis auctor elit sed vulputate.
            Cursus euismod quis viverra nibh.
          </p>
        </div>
        <div className="about__list">
          {developers.map((item, index) => (
            <Developers key={index + item} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
