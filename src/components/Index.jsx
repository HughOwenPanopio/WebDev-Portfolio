import React from "react";
import Header from "../common/Header";
import profile from "../assets/images/profile.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/JavaScript.png";
import bootstrap from "../assets/images/bootstrap.png";
import ViteReact from "../assets/images/vite-react.png";
import php from "../assets/images/PHP.png";
import postgresql from "../assets/images/postgresql.png";
import { Button } from "reactstrap";
import About from "../components/About";
import "../css/index.css";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="row img-detailsContainer">
            <div className="col-5 image-container">
              <img src={profile} alt="" />
            </div>
            <div className="col-6 details-container">
              <h3>Hello, I'm</h3>
              <h1>Hugh Owen Cortez Panopio</h1>
              <h3>Full Stack Web Developer</h3>
              <div className="buttons-container">
                <Button id="cv">Download CV</Button>
                <Button id="info">Contact Info</Button>
              </div>
              <div className="icon-container">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-square-github"></i>
              </div>
              <div className="tech-strack-container">
                <h4>Tech Stack:</h4>
                <img src={html} alt="" id="html-logo" />
                <img src={css} alt="" id="css-logo" />
                <img src={javascript} alt="" id="js-logo" />
                <img src={bootstrap} alt="" id="bootstrap-logo" />
                <img src={ViteReact} alt="" id="viteReact-logo" />
              </div>
              <div className="tech-strack-container2">
                <img src={php} alt="" id="php-logo" />
                <img src={postgresql} alt="" id="postgresql-logo" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <About />
    </>
  );
};

export default Index;
