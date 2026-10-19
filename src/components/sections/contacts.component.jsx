import { contact, socials } from "../../assets/data";

export default function Contacts() {
  return (
    <>
      {(contact.email || socials.length > 0) && (
        <footer className="wrap" id="contact">
          <br />
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
