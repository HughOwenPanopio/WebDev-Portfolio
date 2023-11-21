import React from "react";
import Header from "../common/Header";
import programming from "../assets/images/programming.png";
import cert from "../assets/images/cert.png";
import '../css/about.css'


const About = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="row about-container">
            <div className="col-5 image-container">
              <img src={programming} alt="" id="programmer" />
            </div>
            <div className="col-6 about-details">
              <h3>ABOUT ME</h3>
              <h2>A Dedicated Full-Stack Web Developer</h2>
              <p>
                As an spiring Full Stack Web Developer, eager to apply newfound
                expertise in (HTML, CSS, Bootstrap, JavaScript, React.JS, PHP,
                MySQL and ProsgreSQL) to contribute to dynamic and collaborative
                development projects. Known for adaptability, strong
                problem-solving skills, and a commitment to mastering the latest
                industry tools. Seeking opportunities to contribute passion and
                dedication to a forward-thinking team.
              </p>
              <h3>Certificate and Awards:</h3>
              <img src={cert} alt="" id="certificate" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
