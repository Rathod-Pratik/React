import React, { useEffect } from 'react'
import Card from "../language-card";
import Button from "../Button"
import styled from 'styled-components';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Language = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <Box>
  <div class="title" data-aos='fade-down' >My skills</div>
  <div className='hero'>
  <div class="cards" data-aos='fade-down'>
    <Card text={"HTML & CSS"} percentage={70} color={"yellow"} />
    <Card text={"jQuery"} percentage={95} color={"#ff6161"} />
    <Card text={"Javascript"} percentage={60} color={"orange"} />
    <Card text={"ReactJs"} percentage={30} color={"green"} />
  </div>
  <div class="experience" data-aos='fade-down'>
    <h1 data-aos='fade-down'>Beautiful & Unique Digital <br /> Experiences</h1>
    <p>Creating beautiful and unique digital experiences requires a blend of creativity and technical skill. By focusing on intuitive user interfaces and innovative design, digital platforms can captivate users, keeping them engaged and invested in the content.</p>
    <p>Personalized experiences also enhance user interaction, making the digital journey memorable. Thoughtful animations, seamless navigation, and responsive design contribute to a visually appealing and efficient digital environment.</p>
    <div class="cv-btn" data-aos='fade-down'>
      <Button class="lang-btn" text={"Download CV"} />
    </div>
  </div>
</div>

    </Box>
  )
}

export default Language

const Box=styled.div`
    background-color: rgb(234, 234, 249);
    padding: 12px 12px;
.title{
    color: #6f34fe;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
}
  .hero{
    display: flex;
  }
  .cards{
    display: flex;
    width: 48%;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    gap: 1rem;
  }
  .experience h1{
    margin-top: 0.5rem;
    color: #3f396d;
    font-size: 2.5rem;
    font-weight: 700;
    display:flex;
    justify-content: center;
    text-align: center;
  }
  .experience p{
    font-size: 1rem;
    width: 70%;
    color: #6c757d;
    text-align: center;
    margin: auto;
    padding: 9px 30px;
  }
.cv-btn button{
  padding: 13px 30px !important;
}
.cv-btn{
  display: flex;
  justify-content: center;
  padding: 13px 0px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

 .experience {
  margin-top: 20px;
  width: 48%;
}
@media only screen and (max-width: 850px){
  .hero{
    flex-direction: column;
  }
  .cards{
    width: 100%;
  }
  .experience{
    width: 100%;
  }
  .experience p{
    width: 100%;
  }
}

`