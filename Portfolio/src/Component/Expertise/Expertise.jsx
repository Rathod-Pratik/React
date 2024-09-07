import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <div>
      <h1 className="title">My Expertise</h1>
      <h2 className="sub-title">
        Provide Wide Range of <br />
        Digital Services
      </h2>
      <div className="expertise-card">
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
    </div>
  );
};

export default Expertise;
