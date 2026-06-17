import { useEffect, useRef } from "react";

import placeholderImg from "./assets/PlaceHolder.jpg";

import cakeryWebsite from "./assets/Cakery-Website.png"
import testCV from "./assets/Test-CV.png"
import blackjackSite from "./assets/Blackjack-site.png"

const projects = [
    {
        name: "Cv",
        description: "A fake CV i create when learing html and css",
        image: testCV,
        link: "https://willsky013.github.io/CV---HTML--CSS/"
    },
    {
        name: "Cakery Website",
        description: "A test site i create when learing html and css",
        image: cakeryWebsite,
        link: "https://willsky013.github.io/Test---Cakery-site/"
    },
    {
        name: "Blackjack",
        description: "A blackjack game created using react",
        image: blackjackSite,
        link: "https://willsky013.github.io/BlackJack/"
    }
]

export default function Projects() {
  return (
    <>
      {projects.map((project, index) => (
        <a
        key={index}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
        >
        <img
            className="project-image"
            src={project.image}
            alt={project.name}
        />
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        </a>
      ))}
    </>
  );
}