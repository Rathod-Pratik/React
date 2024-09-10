import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <Homepage >
      <div className="info-section" id="info" data-aos="fade-right">
        <div className="desc-section ">
        <span className="hello-text">Hello! I Am</span>
        <span className="name-text">Rathod Pratik</span>
        <span className="description-text" id="text">
          I'm A Web Developer having experience in creating websites
          with fully responsive design and handling backend development.
        </span>
        </div>
        <div className="button-container">
          <Button text={"Hire me"} />
        </div>
      </div>
      <div className="image-section" id="image" data-aos="fade-left">
        <img src="Images/home.jpg" className="profile-image" alt="" />
      </div>
    </Homepage>

  );
};

export default Home;
const Homepage = styled.main`

    background: linear-gradient(
      33deg,
      rgba(242, 242, 255, 1) 0%,
      rgba(235, 249, 255, 1) 100%
    );
    display: flex;
    margin: auto;
    width: 100%;
    padding: 0px 3rem;
    align-items: center;
    height:650px;
  
  .info-section {
    width: 48%;
    padding: 12px 30px;
  }
  .desc-section{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3.5rem;
  }
  .hello-text {
    color: #3f396d;
    font-size: 3rem;
  }
  
  .name-text {
    color: #6f34fe;
    font-size: 3rem;
  }
  
  .description-text {
    max-width: 70%;
    color: #333;
  }
  
  .button-container {
    margin-top: 1rem;
  }
  
  .image-section {
    margin-top: 3.5rem;
    width: 48%;
    display: flex;
    justify-content: end;
  }
  
  .profile-image {
    border-radius: 50%;
    max-width: 400px;
    height: 400px;
  }
  @media only screen and (max-width: 1150px){
      .image-section {
    margin-top: 1.5rem;
  }
  
  }
  @media only screen and (max-width: 850px) {
    .button-container{
    display: flex;
    text-align: center;
    }
    #text {
      max-width: 90%;
    }
    #image {
      display: none;
    }

    #info {
      width: 100vw;
    }
  
        height: 500px;
  }
  @media only screen and (max-width: 350px){
    #text{
      text-align: center;
    }
    .hello-text,.name-text{
      font-size: 2rem;
    }
    #info{
      width: 100vw;
        display: flex;
        gap: 12px;
        align-items: center;
    }

        height: 325px;
    }
`;