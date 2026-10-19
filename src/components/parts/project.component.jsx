import Thumb from "./thumb.component";

export default function Project({ project, index }) {
  return (
    <article className="project" key={project.title}>
      <Thumb project={project} index={index} />
      <div>
        <h3>{project.title}</h3>
        <project>{project.description}</project>
        {project.tags?.length > 0 && (
          <ul className="tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <div className="links">
          {(project.links || [])
            .filter((l) => l.url)
            .map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
