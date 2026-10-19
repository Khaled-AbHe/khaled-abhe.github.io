import { projects } from "../../assets/data";
import Project from "../parts/project.component";

export default function Projects() {
  return (
    <>
      {projects.length > 0 && (
        <section id="projects">
          <h2>Projects</h2>
          {projects.map((p, i) => (
            <Project key={i} project={p} index={i} />
          ))}
        </section>
      )}
    </>
  );
}
