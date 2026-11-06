import {
  GraduationCap,
  Code2,
  Rocket,
  Target,
} from "lucide-react";

import journey from "../../data/journey";
import "./Journey.css";
import Reveal from "../common/Reveal";

const icons = [GraduationCap, Code2, Rocket, Target];

function Journey() {
  return (
    <section className="journey-section section-padding" id="journey">
      <div className="container">

        <Reveal direction="up">
          <div className="journey-heading">
            <span className="section-eyebrow">MY DEVELOPMENT PATH</span>

            <h2>
              THE JOURNEY <span>SO FAR.</span>
            </h2>

            <p>
              Every project, every challenge and every lesson moves me forward.
            </p>
          </div>
        </Reveal>

        <div className="journey-timeline">
          {journey.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={item.id}
                direction="up"
                delay={index * 150}
              >
                <article className="journey-item">

                  <div className="journey-marker">
                    <Icon size={19} />
                  </div>

                  <div className="journey-card">

                    <div className="journey-card-top">
                      <span className="journey-year">{item.year}</span>
                      <span className="journey-status">{item.status}</span>
                    </div>

                    <span className="journey-type">{item.type}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up">
          <div className="journey-footer">
            <span className="journey-footer-icon">✦</span>
            <p>THE JOURNEY DOESN'T END HERE.</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Journey;