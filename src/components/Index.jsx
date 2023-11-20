import React from 'react'
import Header from '../common/Header'
import profile from '../assets/images/profile.png'
import { Button } from 'reactstrap'
import '../css/index.css'

const Index = () => {
  return (
    <>
    <Header/>
    <main>
      <section>
          <div className="row img-detailsContainer">
            <div className="col image-container">
              <img src={profile} alt="" />
            </div>
            <div className="col details-container">
              <h3>Hello, I'm</h3>
              <h1>Hugh Owen Cortez Panopio</h1>
              <h3>Full Stack Web Developer</h3>
              <div className="buttons-container">
                <Button id='cv'>Download CV</Button>
                <Button id='info'>Contact Info</Button>
              </div>
              <div className="icon-container">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-github"></i>
              </div>
            </div>
          </div>
      </section>
    </main>
    </>
  )
}

export default Index