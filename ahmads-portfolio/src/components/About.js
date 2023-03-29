import React from "react";

const About = () => {
  return (
    <div className="Intro" id="Intro">
        <div className="i-name">
          <span>Hello My Names</span>
          <span>Ahmad Bustami</span>
          <span>
            I'm a Frontend Developer with low level of experience in web designing
            and development. Im currently learning React.js and looking forward to
            finishing my first certification. I hope to at least gain 4 more 
            certifications in feilds i enjoy.
          </span>
        </div>
       
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/ahmad92894">Github</a>
        </div>
    </div>
  );
};

export default About;