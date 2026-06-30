import { education, experiences, leadership } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section className="section split-section" id="experience">
      <div>
        <SectionHeader
          eyebrow="Experience"
          title="Hands-on experience in product delivery, frontend, and systems analysis."
        />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
              <div className="timeline-dot" />
              <div>
                <p className="timeline-period">{experience.period}</p>
                <h3>{experience.role}</h3>
                <p className="company">{experience.company}</p>
                <ul>
                  {experience.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="side-stack">
        <article className="info-card education-card">
          <p className="eyebrow">Education</p>
          <h3>{education.degree}</h3>
          <p className="company">{education.school}</p>
          <p>{education.period}</p>
          <p>{education.location}</p>
          <ul>
            {education.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </article>

        <article className="info-card">
          <p className="eyebrow">Leadership</p>
          {leadership.map((item) => (
            <div className="leadership-item" key={`${item.title}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="company">{item.organization}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </aside>
    </section>
  );
}
