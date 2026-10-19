import { about } from "../../assets/data";

export default function AboutMe() {
  return (
    <>
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
    </>
  );
}
