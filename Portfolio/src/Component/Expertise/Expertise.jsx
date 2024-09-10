import React, { useEffect } from "react";
// // import "./Expertise.css";
import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Expertise = () => {
  useEffect(()=>{
Aos.init();
  })
  return (
    <Expertises>
      <h1 className="title" data-aos='fade-down'>My Expertise</h1>
      <h2 className="sub-title" data-aos='fade-down'>
        Provide Wide Range of <br />
        Digital Services
      </h2>
      <div className="expertise-card" data-aos='fade-down'>
        <div className="card">
          <img src="Images/service-icon1.png" alt="service icon-1" />
          <h1>frontend</h1>
          <p>
            The frontend of the website will be built using React for dynamic
            user interfaces and CSS for styling. The components will be reusable
            and modular.
          </p>
          <a href="">Read more</a>
        </div>
        <div className="card">
          <img src="Images/service-icon2.png" alt="service icon-2" />
          <h1>Debugging</h1>
          <p>
            To ensure smooth functionality, debugging will involve tools like
            Chrome DevTools for real-time inspection of elements.
          </p>
          <a href="">Read more</a>
        </div>
        <div className="card">
          <img src="Images/service-icon3.png" alt="service icon-3" />
          <h1>Database</h1>
          <p>
            The backend will use MongoDB as the primary database, ensuring
            flexibility with its NoSQL structure. The data will be organized
            into collections.
          </p>
          <a href="">Read more</a>
        </div>
      </div>
    </Expertises>
  );
};

export default Expertise;

const Expertises=styled.div`
  .title {
  margin-top: 12px !important;
  color: #6f34fe;
  font-size: 1.5rem !important;
  display: flex;
  justify-content: center;
}
.sub-title {
  display: flex;
  justify-content: center;
  color: #3f396d;
  font-size: 2.5rem !important;
  text-align: center;
  font-weight: 700 !important;
  margin-top: 20px;
}
.expertise-card {
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
}

.card {
  border-radius: 8px;
  max-width: 300px;
  text-align: center;
  margin: 20px;
}
.card img {
  margin: auto;
  width: 120px;
}
.card h1 {
  display: flex;
  margin: 12px 0px;
  justify-content: center;
  color: #3f396d;
  font-weight: bold;
  font-size: 1.5rem;
}
.card p {
  color: #6c757d;
  text-align: center;
  font-size: 16px;
}
.card a {
  position: relative;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    color: orange;
    width: 100px;
    margin: 12px auto;
}
.card a:hover {
  color: #6f34fe;
}
.card a::after {
  content: "";
  position: absolute;
  margin: auto;
  width: 0;
  height: 2px;
  bottom: 0;
  left: -10px;
  background-color: #6f34fe;
  transition: width 0.4s ease-in-out;
}

.card a:hover::after {
  color: #6f34fe;
  width: 120px;
}

@media (max-width: 800px) {
  .expertise-card {
    flex-direction: column;
    justify-content: center;
    gap: 1;
  }
  .card {
    margin: auto;
    height: 330px;
    width: auto;
    padding: 26px 12px;
  }
  .card p {
    text-align: justify;
  }
}
@media (max-width: 340px) {
  .card {
    padding: unset;
  }
}

`