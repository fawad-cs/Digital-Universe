import {
  Code2,
  Layers3,
  Database,
  ArrowUpRight,
} from "lucide-react";

import skills from "../../data/skills";
import "./Skills.css";
import Reveal from "../common/Reveal";

const icons = [Code2, Layers3, Database];

function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="container">

        {/* Heading */}
        <Reveal direction="up">
          <div className="skills-heading">
            <span className="section-eyebrow">MY TECH STACK</span>

            <h2>
              TOOLS OF <span>MY TRADE.</span>
            </h2>

            <p>
              Technologies and tools I use while creating digital experiences.
            </p>
          </div>
        </Reveal>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={skill.id}
                direction="up"
                delay={index * 150}
              >
                <article className="skill-card">

                  <div className="skill-card-top">
                    <span>{skill.number}</span>
                    <Icon size={25} />
                  </div>

                  <h3>{skill.category}</h3>

                  <p className="skill-description">
                    {skill.description}
                  </p>

                  <div className="skill-divider"></div>

                  <div className="technology-list">
                    {skill.technologies.map((technology) => (
                      <span className="technology-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="skill-card-footer">
                    <span>EXPLORE TECHNOLOGY</span>
                    <ArrowUpRight size={17} />
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up">
          <div className="skills-bottom">
            <span className="skills-bottom-dot"></span>
            ALWAYS LEARNING. ALWAYS BUILDING.
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Skills;