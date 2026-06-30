import { projects } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects that combine product, engineering, and analysis."
        description="A curated set of web, machine learning, data warehouse, QA, and product-development projects from my recent academic and internship work."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className={project.featured ? "project-card featured" : "project-card"} key={project.title}>
            <div className="project-card-header">
              <div>
                <p className="project-period">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
              </div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  ↗
                </a>
              ) : null}
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}