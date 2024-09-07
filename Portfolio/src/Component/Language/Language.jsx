import React from 'react'
import Card from "./language-card";
import './Language.css'
import Button from "../Button"
const Language = () => {
  return (
    <div className='Box'>
      <div className="title">My skills</div>
      <div className="cards flex justify-center gap-2">
        <Card text={"HTML & CSS"} percentage={70} color={"yellow"} />
        <Card text={"Tailwind CSS"} percentage={60} color={"#008dff"} />
        <Card text={"jQuery"} percentage={95} color={"#ff6161"} />
        <Card text={"Javascript"} percentage={60} color={"orange"} />
        <Card text={"ReactJs"} percentage={30} color={"green"} />
        <Card text={"PHP"} percentage={85} color={"purple"} />
        <Card text={"C++"} percentage={70} color={"cyan"} />
        <Card text={"C"} percentage={80} color={"#00ff93"} />
        <Card text={"SQL"} percentage={50} color={"#2c2f8c"} />
        <Card text={"MongoDB"} percentage={30} color={"#fc7dca"} />
        <Card text={"Java"} percentage={20} color={"#54e44f"} />
      </div>
      <div className="Experience">
        <h1>Beautiful & Unique Digital <br/> Experiences</h1>
        <p>Creating beautiful and unique digital experiences requires a blend of creativity and technical skill. By focusing on intuitive user interfaces and innovative design, digital platforms can captivate users, keeping them engaged and invested in the content.
          </p>
          <p>
            Personalized experiences also enhance user interaction, making the digital journey memorable. Thoughtful animations, seamless navigation, and responsive design contribute to a visually appealing and efficient digital environment.</p>
            <div className="cv-btn">
            <Button className='lang-btn' text={" Download CV "}/>
            </div>
      </div>
    </div>
  )
}

export default Language

