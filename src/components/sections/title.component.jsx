import { profile, projects } from "../../assets/data";
import PixelGrid from "../parts/pixel-grid.component";

export default function Title() {
  return (
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
  );
}
