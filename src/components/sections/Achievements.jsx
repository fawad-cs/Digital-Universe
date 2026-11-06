import {
  Award,
  Code2,
  Rocket,
  Database,
} from "lucide-react";

import achievements from "../../data/achievements";
import Reveal from "../common/Reveal";
import "./Achievements.css";

const icons = [Code2, Award, Rocket, Database];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section section-padding">
      <div className="container">

        {/* Heading */}
        <Reveal direction="up">
          <div className="achievements-heading">
            <span className="section-label">MY PROGRESS</span>

            <h2>
              Learning <span>Milestones</span>
            </h2>

            <p>
              Every step is part of my journey toward becoming a better developer.
            </p>
          </div>
        </Reveal>

        {/* Achievement Cards */}
        <div className="achievements-grid">
          {achievements.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={item.id}
                direction="up"
                delay={index * 150}
              >
                <div className="achievement-card">

                  <div className="achievement-top">
                    <span className="achievement-number">
                      {item.number}
                    </span>

                    <span className="achievement-icon">
                      <Icon size={23} />
                    </span>
                  </div>

                  <span className="achievement-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="achievement-line"></div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Achievements;