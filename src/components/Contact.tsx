import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful and easy to use.</h2>
        <p>
          I am open to software engineering, frontend development, product, system analyst,
          project management, and data-related internship opportunities.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Email Me
        </a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
      <div className="contact-list">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href="tel:+6281282109806">{profile.phone}</a>
        <span>{profile.location}</span>
      </div>
    </section>
  );
}
