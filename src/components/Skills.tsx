import { skills } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader
        eyebrow="Skill Stack"
        title="Comfortable moving between code, analysis, and documentation."
        description="My strongest profile sits at the intersection of frontend development, product execution, data-driven systems, and cross-functional teamwork."
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
            <h3>{skill.group}</h3>
            <div className="tag-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
