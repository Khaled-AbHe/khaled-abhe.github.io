import {
  about,
  contact,
  profile,
  projects,
  skills,
  socials,
} from "../../assets/data.js";

export default function Tab({ toggleTheme }) {
  const sections = [
    projects.length && ["projects", "Projects"],
    skills.length && ["skills", "Skills"],
    about.length && ["about", "About"],
    (contact.email || socials.length) && ["contact", "Contact"],
  ].filter(Boolean);

  return (
    <div className="wrap">
      <nav>
        <a className="logo">{profile.name}</a>
        <ul>
          {sections.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <button
          id="theme"
          onClick={() => toggleTheme()}
          aria-label="Toggle light or dark theme"
        >
          ◐
        </button>
      </nav>
    </div>
  );
}
