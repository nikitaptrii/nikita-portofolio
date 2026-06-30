import { navigation, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Nikita Putri Prabowo portfolio home">
        <span className="brand-mark">NP</span>
        <span>Nikita</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={profile.resume} target="_blank" rel="noreferrer">
        View CV
      </a>
    </header>
  );
}
