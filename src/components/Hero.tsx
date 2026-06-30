import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button secondary" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
        </div>
      </div>

      <aside className="profile-card" aria-label="Profile photo and quick information">
        <img
          className="profile-photo"
          src="/nikita-profile.jpg"
          alt="Portrait of Nikita Putri Prabowo"
        />
        <div className="profile-info">
          <p>{profile.location}</p>
          <p>Universitas Padjadjaran</p>
        </div>
      </aside>
    </section>
  );
}
