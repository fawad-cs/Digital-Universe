
import { ChevronDown } from "lucide-react";

import Button from "../common/Button";
import HeroScene from "../three/HeroScene";
import Reveal from "../common/Reveal";
import useTypewriter from "../../hooks/useTypewriter";

import "./Hero.css";

function Hero() {
  const typedText = useTypewriter([
    "Frontend Developer",
    "React Developer",
    "Creative Coder",
  ]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <Reveal direction="left" className="hero-content">

          <div className="hero-status">
            <span className="status-dot"></span>
            AVAILABLE FOR CREATIVE PROJECTS
          </div>

          <p className="hero-intro">HELLO, I'M FAWAD</p>

          <h1 className="hero-title">
            I BUILD
            <br />
            DIGITAL
            <br />
            <span>EXPERIENCES.</span>
          </h1>

          <p className="hero-description">
            I'm a creative developer focused on building modern,
            responsive and meaningful digital experiences through code
            and creativity.
          </p>

          {/* Typewriter */}
          <div className="hero-typewriter">
            <span>{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <div className="hero-buttons">
            <Button href="#projects" variant="primary">
              Explore My Work
            </Button>

            <Button href="#contact" variant="outline">
              Let's Connect
            </Button>
          </div>

          <div className="hero-bottom-text">
            <span>REACT DEVELOPER</span>
            <span className="hero-separator"></span>
            <span>CREATIVE THINKER</span>
          </div>

        </Reveal>

        {/* Right 3D Scene */}
        <div className="hero-visual">

          <div className="hero-glow"></div>

          <HeroScene />

          <div className="hero-floating-card">
            <span className="floating-card-icon">✦</span>

            <div>
              <strong>Creative Mind</strong>
              <p>Turning ideas into reality</p>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={17} />
      </a>

      <div className="hero-background-text">UNIVERSE</div>

    </section>
  );
}

export default Hero;
