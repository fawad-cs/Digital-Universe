
import Reveal from "../common/Reveal";
import Logo from "../common/Logo";
import SocialIcons from "../common/SocialIcons";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <Reveal direction="left">
            <div className="footer-brand">
              <Logo className="footer-logo" />

              <p>
                Building digital experiences with creativity,
                curiosity, and modern technology.
              </p>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal direction="up" delay={100}>
            <div className="footer-navigation">
              <h4>QUICK LINKS</h4>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
            </div>
          </Reveal>

          {/* Connect */}
          <Reveal direction="right" delay={150}>
            <div className="footer-connect">
              <h4>LET'S CONNECT</h4>

              <p>
                Have a project idea? Let's create something meaningful.
              </p>

              <SocialIcons />

              <a href="#contact" className="footer-contact-link">
                Get in Touch <span>↗</span>
              </a>
            </div>
          </Reveal>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} FAWAD. All rights reserved.</p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>

          <p>Designed & Built with React</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
