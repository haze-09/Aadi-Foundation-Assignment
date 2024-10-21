/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "buildCV",
    description:`A project where you enter your details and it generates your resume in pdf format. It is fully
            responsive. It remembers the data entered as it stores it in local storage Built with React,
            React-pdf, Framer Motion and Vite. It is deployed on Vercel`,
    url: "https://build-cv-beta.vercel.app/",
  },
  {
    title: "Pokemon Memory Card Game",
    description:
      `A fully responsive Pokemon memory card game built with React, Vite and PokeAPI. The goal
      of the game is to click through all the cards. You can only click each card once. The cards get
      shuffled when you click a card. The names and images of Pokemon are pulled from PokeAPI.
      Each game starts with a random set of Pokemon based on the difficulty chosen. It is deployed
      on Vercel`,
    url: "https://pokemon-memory-card-game.vercel.app/",
  },
  {
    title: "Battleship Board Game",
    description:
      `A web rendition of the classic battleship board game. It has both local player vs player and
        player vs Computer. It makes use of the HTML Drag and drop API to place ships on the
      board. It was made to practice test driven development using jest. the project has been bundled
      using webpack.`,
    url: "https://haze-09.github.io/battleship/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
