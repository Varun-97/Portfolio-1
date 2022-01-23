import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import logo from '../../Assets/i1.jpeg'
import logo1 from '../../Assets/cos5.jpeg'
import logo2 from '../../Assets/cos6.jpeg'
import logo3 from '../../Assets/cos13.jpeg'
import logo4 from '../../Assets/cos11.jpeg'
import logo5 from '../../Assets/cos12.jpeg'
import Home3 from "./Home3";

function Home() {
  return (
    <section>
      <Home3 />
      <Container fluid className="home-section" id="home" style={{position:'relative'}}>
        <div className="row" style={{ backgroundColor: '#e6d3d8' }}>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo} alt="home pic" className="img-fluid rounded" />
          </div>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo1} alt="home pic" className="img-fluid rounded" />
          </div>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo2} alt="home pic" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row" style={{  backgroundColor: '#e6d3d8' }}>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo5} alt="home pic" className="img-fluid rounded" style={{ maxHeight: '50rem' }} />
          </div>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo4} alt="home pic" className="img-fluid rounded" style={{ maxHeight: '40.80rem', width: '31rem' }} />
          </div>
          <div className="bg-image hover-zoom col-sm-4" style={{ padding: '0.5rem 0.5rem 0.5rem 0.5rem', backgroundColor: '#e6d3d8' }}>
            <img src={logo3} alt="home pic" className="img-fluid rounded" style={{ maxHeight: '50rem', width: '31rem' }} />
          </div>
        </div>
        {/* <Particle /> */}
        {/* <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHREYA WATS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
        {/* <img src={logo}alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container> */}
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
