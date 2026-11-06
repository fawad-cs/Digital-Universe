import {
  Code2,
  Lightbulb,
  Rocket,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

import Reveal from "../common/Reveal";
import "./About.css";

const features = [
  {
    icon: <Code2 size={22} />,
    title: "Clean Development",
    description:
      "Building organized, reusable and maintainable frontend experiences.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Creative Thinking",
    description:
      "Turning ideas into clear, useful and engaging digital interfaces.",
  },
  {
    icon: <Rocket size={22} />,
    title: "Continuous Growth",
    description:
      "Learning new technologies and improving with every project.",
  },
];

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">

        {/* Section Heading */}
        <Reveal direction="up">
          <SectionHeading
  eyebrow="GET TO KNOW ME"
  title="A LITTLE ABOUT"
  highlight="ME."
  description="The person behind the code, creativity and digital experiences."
/>
        </Reveal>

        <div className="about-grid">

          {/* Profile Visual */}
          <Reveal direction="left">
            <div className="about-visual">
              <div className="about-orbit orbit-one"></div>
              <div className="about-orbit orbit-two"></div>

              <div className="about-profile-card">

                <div className="about-profile-top">
                  <Sparkles size={20} />
                  <span>DEVELOPER PROFILE</span>
                </div>

                <div className="about-avatar">
                  F<span>.</span>
                </div>

                <h3>FAWAD</h3>
                <p>Frontend Developer</p>

                <div className="about-profile-line"></div>

                <div className="about-profile-bottom">
                  <span>CREATIVE</span>
                  <span>CURIOUS</span>
                  <span>FOCUSED</span>
                </div>

              </div>

              <div className="about-floating-label">
                <span className="about-label-dot"></span>
                Always learning
              </div>
            </div>
          </Reveal>

          {/* About Content */}
          <Reveal direction="right">
            <div className="about-content">

              <span className="about-small-title">
                MY INTRODUCTION
              </span>

              <h3>
                Building digital experiences with
                <span> purpose and creativity.</span>
              </h3>

              <p>
                I'm a frontend developer interested in creating modern,
                responsive and user-friendly websites. I enjoy working
                with React, exploring new technologies and transforming
                ideas into functional digital experiences.
              </p>

              <p>
                My goal is to keep improving my development skills and
                create projects that combine thoughtful design with
                reliable functionality.
              </p>

              <div className="about-features">
                {features.map((feature, index) => (
                  <Reveal
                    key={feature.title}
                    direction="up"
                    delay={index * 120}
                  >
                    <div className="about-feature">

                      <div className="about-feature-icon">
                        {feature.icon}
                      </div>

                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default About;