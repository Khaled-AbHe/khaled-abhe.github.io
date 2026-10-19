import { GRADIENTS } from "../../assets/constants";

export default function Thumb({ project, index }) {
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
