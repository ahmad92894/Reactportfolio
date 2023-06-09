import React from "react";
import Food1 from "../img/food1.png";
import Food2 from "../img/food2.png";
import Food3 from "../img/food3.png";
import Food4 from "../img/food4.png";
import Music1 from "../img/music1.png";
import Music2 from "../img/music2.png";
import Music3 from "../img/music3.png";
import Music4 from "../img/music4.png";
import Music5 from "../img/music5.png";

const Project = () => {
  return (
    <div className="project" id="project">
        <div className="i-name">
        <body>
          <a href="https://github.com/ahmad92894/Recipe-Database"><img src={Food1} alt="Food1"/></a>
          <a href="https://github.com/ahmad92894/Recipe-Database"><img src={Food2} alt="Food2"/></a>
          <a href="https://github.com/ahmad92894/Recipe-Database"><img src={Food3} alt="Food3"/></a>
          <a href="https://github.com/ahmad92894/Recipe-Database"><img src={Food4} alt="Food4"/></a>
        </body>
        <p>
          THE PROJECT ABOVE IS A RECIPE DATABASE THAT ALLOWS USERS TO SEARCH FOR RECIPES BASED ON INGREDIENTS AND CUISINE. THE PROJECT USES THE EDAMAM API TO FETCH THE DATA AND STORES IT IN A MYSQL DATABASE. THE PROJECT IS DEPLOYED ON HEROKU AND CAN BE FOUND IF YOU CLICK ANY OF THE IMAGES.
          THE PROJECT BELOW IS A MUSIC DASHBOARD THAT ALLOWS USERS TO SEARCH FOR MUSIC BASED ON ARTIST, SONG, ALBUM, AND GENRE. THE PROJECT USES THE SPOTIFY API TO FETCH THE DATA AND STORES IT IN A MYSQL DATABASE. THE PROJECT IS DEPLOYED ON HEROKU AND CAN BE FOUND IF YOU CLICK ANY OF THE IMAGES.
        </p>
        <body>
          <a href="https://github.com/ahmad92894/music-dashboard"><img src={Music1} alt="Music1"/></a>
          <a href="https://github.com/ahmad92894/music-dashboard"><img src={Music2} alt="Music2"/></a>
          <a href="https://github.com/ahmad92894/music-dashboard"><img src={Music3} alt="Music3"/></a>
          <a href="https://github.com/ahmad92894/music-dashboard"><img src={Music4} alt="Music4"/></a>
          <a href="https://github.com/ahmad92894/music-dashboard"><img src={Music5} alt="Music5"/></a>
        </body>
        </div>
    </div>
  );
};

export default Project;