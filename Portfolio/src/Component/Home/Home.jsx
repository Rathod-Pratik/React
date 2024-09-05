import React from "react";
import styled from "styled-components";
import Button from "../Button";
import './Home.css'


const Home = () => {
  return (
    <div
    className="main-container"
    style={{
      background:
        "linear-gradient(33deg, rgba(242, 242, 255, 1) 0%, rgba(235, 249, 255, 1) 100%)",
    }}
  >
    <div className="homepage-container">
      <div className="info-section" id="info">
        <span className="hello-text">Hello! I Am</span>
        <span className="name-text">Rathod Pratik</span>
        <span className="description-text" id="text">
          I'm A Web Developer having 5 years of experience in creating websites
          with fully responsive design and handling backend development.
        </span>
        <div className="button-container">
          <Button text={"Hire me"} />
        </div>
      </div>
      <div className="image-section" id="image">
        <img src="Images/home.jpg" className="profile-image" alt="" />
      </div>
    </div>
  </div>
  );
};

export default Home;
const Homepage = styled.main`
  background: linear-gradient(
    33deg,
    rgba(242, 242, 255, 1) 0%,
    rgba(235, 249, 255, 1) 100%
  );
  @media only screen and (max-width: 850px) {
    display: flex;
    text-align: center;
    #text {
      max-width: 90%;
    }
    #image {
      display: none;
    }

    #info {
      width: 100vw;
    }
  }
`;
