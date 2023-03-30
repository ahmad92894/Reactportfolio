import React from "react";
import me from "../img/me.png";

const About = () => {
  return (
    <div className="Intro" id="Intro">
        <div className="i-name">
            <img style={{ width: 500, height: 600, }} src={me} alt="me" />
          <span>
            <p>
            Hello My Names Ahmad Bustami,
            I'm a Frontend Developer with low level of experience in web designing
            and development. Im currently learning React.js and looking forward to
            finishing my first certification. I hope to at least gain four more 
            certifications in feilds i enjoy.</p>
          </span>
        </div>
    </div>
  );
};

export default About;