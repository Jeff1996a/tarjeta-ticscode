import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const profession = this.props.data.profession;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg  color="#7fa961" num={60} type="cobweb" bg={true} className="particles-bg-canvas" />

        <div className="row banner">
          <div className="banner-text">
            <Fade top>
              <h1 className="responsive-headline">{profession}</h1>
            </Fade>
            <Fade top>
              <div className="responsive-headline">
                <Zmage src="./images/perfil.jpg"  alt="" className="perfil"/>
              </div>
            </Fade>
            
            <Fade top>
              <h2 className="responsive-headline">{name}</h2>
            </Fade>
            <Fade top duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade top duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Proyectos
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
