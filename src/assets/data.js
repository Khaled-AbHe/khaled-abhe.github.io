export const profile = {
  name: "Khaled Abou Hechmeh",
  role: "Aspiring Game Developer",
  headline: ["I build games", "and learn how they work."],
  intro:
    "Hi, I’m Khaled, a computer science student at Cégep Marie-Victorin. I’m learning Unity and Godot, and I’m looking for an internship in game development.",
};

// Projects show in this order. To add one, copy a block and fill it in.
export const projects = [
  {
    title: "U-Owl",
    description:
      "A replica of U-Haul’s rental service, built as a full-stack app with a React and TypeScript frontend and a NestJS backend, run together with Docker Compose.",
    tags: ["React", "TypeScript", "NestJS", "Docker"],
    image: "",
    links: [
      { label: "Source code", url: "https://github.com/Khaled-AbHe/U-Owl" },
    ],
  },
  {
    title: "FRND-ArcaneGrimoire",
    description:
      "A website for managing Dungeons & Dragons spellcasting. You can create characters, spells and spell slots.",
    tags: ["React", "TypeScript", "D&D"],
    image: "",
    links: [
      {
        label: "Source code",
        url: "https://github.com/Khaled-AbHe/FRND-ArcaneGrimoire",
      },
    ],
  },
  {
    title: "ProjetFinale: Frog Swing Platformer",
    description:
      "My final project for a class: a 2D platformer where you play a frog that swings from place to place with its tongue.",
    tags: ["2D platformer", "Shaders", "Class project"],
    image: "",
    links: [
      { label: "Play it", url: "" }, // to put itch.io link later
      {
        label: "Source code",
        url: "https://github.com/Khaled-AbHe/ProjetFinale",
      },
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["C#", "Java", "JavaScript", "TypeScript", "Python", "HTML"],
  },
  { title: "Game dev and design", items: ["Unity", "Godot", "GIMP", "Figma"] },
  {
    title: "Web and tools",
    items: [
      "React",
      "Node.js",
      "Docker",
      "Git",
      "SQL",
      "Jellyfin media server at home",
    ],
  },
];

export const about = [
  "I’ve loved video games since I was a kid. Now I want to help make games that give people real fun.",
  "Besides schoolwork, I learn Unity and Godot and build full-stack web projects based on other games. I also host my own media server with Jellyfin because I like knowing how things work under the hood. I’m looking for an internship.",
];

export const contact = {
  email: "khaledabouhechmeh@outlook.com",
  socials: [
    { label: "GitHub", url: "https://github.com/Khaled-AbHe" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/khaled-abou-hechmeh-b77642316/",
    },
    { label: "itch.io", url: "" },
  ],
};
