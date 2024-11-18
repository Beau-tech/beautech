import React from "react";
import styled from "styled-components";
import "./home.css"
import About from "./About";
import Pricing from "./pricing";

// Styled component for the headline
const StyledHeading = styled.h3`
  font-size: 80px;
  font-weight: 200;
  postion: absolute;
  top:50%;
  left: 50%;
  transform translate(-50%, -50%);
`;
const StyledHero = styled.div `
    position: relative;
`

const Home = () => {
  return (
    <div>
      <div className="Hero-section" id="hero">
        <StyledHeading>
          <div className="top-box">
            <h3>Where <span style={{color:'#f8b235'}}>Beauty</span><br/> Meets Web</h3>
          </div>
        </StyledHeading>
        <StyledHero>
            <div className="box">
                <img src="/images/circles.png" alt="circles"/>
            </div>
        </StyledHero>
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='pricing'>
        <Pricing />
      </div>
    </div>
  );
};

export default Home;
