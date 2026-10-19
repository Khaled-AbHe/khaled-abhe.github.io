import { useEffect, useState } from "react";
import AboutMe from "./components/sections/about-me.component.jsx";
import Contacts from "./components/sections/contacts.component.jsx";
import Projects from "./components/sections/projects.component.jsx";
import Skills from "./components/sections/skills.component.jsx";
import Tab from "./components/sections/tab.component.jsx";
import Title from "./components/sections/title.component.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  });

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

  return (
    <>
      <Tab toggleTheme={toggleTheme} />
      <Title />

      <main className="wrap">
        <Projects />
        <Skills />
        <AboutMe />
      </main>

      <Contacts />
    </>
  );
}
