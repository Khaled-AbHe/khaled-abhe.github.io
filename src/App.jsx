import { useEffect, useState } from "react";
import PixelGrid from "./PixelGrid.jsx";
import { profile, projects, skills, about, contact } from "./data.js";

const GRADIENTS = [
  ["#d6336c", "#7c3aed"],
  ["#0e7490", "#2563eb"],
  ["#ea580c", "#d6336c"],
  ["#16a34a", "#0e7490"],
  ["#7c3aed", "#2563eb"],
];

function Thumb({ project, index }) {
  if (project.image) {
    return (
      <img
        className="thumb"
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
      />
    );
  }
  const [from, to] = GRADIENTS[index % GRADIENTS.length];
  return (
    <div
      className="thumb"
      aria-hidden="true"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {project.title.trim().charAt(0).toUpperCase()}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    document.title = `${profile.name} – ${profile.role}`;
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const dark = theme
      ? theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const socials = contact.socials.filter((s) => s.url);
  const sections = [
    projects.length && ["projects", "Projects"],
    skills.length && ["skills", "Skills"],
    about.length && ["about", "About"],
    (contact.email || socials.length) && ["contact", "Contact"],
  ].filter(Boolean);

  return (
    <>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">
            {profile.name}
          </a>
          <ul>
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <button
            id="theme"
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
          >
            ◐
          </button>
        </nav>
      </div>

      <header className="hero" id="top">
        <PixelGrid />
        <div className="wrap hero-copy">
          <h1>
            {profile.headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < profile.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p>{profile.intro}</p>
          {projects.length > 0 && (
            <a className="btn" href="#projects">
              See my projects
            </a>
          )}
          <a className="btn alt" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <main className="wrap">
        {projects.length > 0 && (
          <section id="projects">
            <h2>Projects</h2>
            {projects.map((p, i) => (
              <article className="project" key={p.title}>
                <Thumb project={p} index={i} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  {p.tags?.length > 0 && (
                    <ul className="tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <div className="links">
                    {(p.links || [])
                      .filter((l) => l.url)
                      .map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label}
                        </a>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section id="skills">
            <h2>Skills</h2>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.title}>
                  <h3>{g.title}</h3>
                  <p>{g.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {about.length > 0 && (
          <section id="about">
            <h2>About me</h2>
            <div className="about">
              {about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        )}
      </main>

      {(contact.email || socials.length > 0) && (
        <footer className="wrap" id="contact">
          <h2>Contact</h2>
          <p>
            {contact.email && (
              <>
                Email me at{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                {socials.length > 0 && ", or find me on "}
              </>
            )}
            {!contact.email && socials.length > 0 && "Find me on "}
            {socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
                {i < socials.length - 2
                  ? ", "
                  : i === socials.length - 2
                    ? " and "
                    : ""}
              </span>
            ))}
            .
          </p>
        </footer>
      )}
    </>
  );
}
