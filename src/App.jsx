import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MovingText from './MovingText.jsx'
import Projects from './Projects.jsx'
import './App.css'

export default function App() {

  const [selected, setSelected] = useState("Projects");

  return (
    <>
      <section className="header">
        <div id="helloWorld">
          <MovingText text={'"Hello World!"'} size="movingText-Heading"/>
          <MovingText text ="-William Falk Bengtsson" size="movingText-Heading"/>
        </div>
        <div id="introdution">
          <MovingText text ="I am an aspiring programmer"/>
          <MovingText text ="This is my personal portfolio showcasing projects i have made or worked on"/>
        </div>
      </section>
      <div>
        <button
          className={`navButtons ${selected === "Projects" ? "selected" : ""}`}onClick={() => setSelected("Projects")}>Projects
        </button>

        <button
          className={`navButtons ${selected === "About" ? "selected" : ""}`}onClick={() => setSelected("About")}>About
        </button>
      </div>
      <div>
        {selected === "Projects" && (
          <section id ="projectDisplay">
            <Projects />
          </section>
        )}

        {selected === "About" && (
          <div className='aboutMe'>
            <MovingText text ="This is infomation about me"/>
            <MovingText text ="My name is William Falk Bengtsson"/>
            <MovingText text ="I like to problemsolve and thinking about how things work"/>
            <MovingText text ="More infomation coming soon"/>
          </div>
        )}
      </div>

      <section className="footer">
        <div id='footer-contactMe'>
          <div>
            <h2>Contact Me</h2>
          </div>
          <a class="out-link" href="https://github.com/Willsky013" target="_blank">GitHub</a>
          <a class="out-link" href="https://www.linkedin.com/in/william-falk-bengtsson-145a86296/" target="_blank">LinkedIn</a>
          <a class="out-link" href="mailto:13williamfb@gmail.com">Gmail</a>
        </div>
      </section>
    </>
  )
}