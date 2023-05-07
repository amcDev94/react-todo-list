import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("We are in Route:", location.pathname); // "/about | /faqs"

  const navigation = (path) => {
    navigate(path);
  };

  //   const goBack = () => {
  //     history(goBack());
  //   };

  return (
    <div>
      <h1>About | FAQs Page</h1>
      <div>
        <button onClick={() => navigation("/")}>Go To Home</button>
        <button onClick={() => navigation(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default AboutPage;
