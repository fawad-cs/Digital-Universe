
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import Logo from "../common/Logo";
import useActiveSection from "../../hooks/useActiveSection";

import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "journey",
  "contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection(sectionIds);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((previous) => !previous);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  return (
    <header className="navbar" onKeyDown={handleKeyDown}>
      <div className="navbar-container">

        {/* Logo */}
        <Logo className="navbar-logo" />

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`navbar-link ${
                activeSection === link.href.slice(1) ? "active" : ""
              }`}
              aria-current={
                activeSection === link.href.slice(1)
                  ? "location"
                  : undefined
              }
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-mobile-contact"
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={17} />
          </a>
        </nav>

        {/* Desktop Contact */}
        <a href="#contact" className="navbar-contact">
          Let's Talk <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className="navbar-menu-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
