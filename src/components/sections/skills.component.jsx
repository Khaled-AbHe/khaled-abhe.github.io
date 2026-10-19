import { skills } from "../../assets/data";

export default function Skills() {
  return (
    <>
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
    </>
  );
}
