import React from "react";

const SkillsGrid = () => {
  const skills = [
    { name: "Python", logo: "/assets/python-logo-only.svg" },
    { name: "MySQL", logo: "/assets/mysql.svg" },
    { name: "React.js", logo: "/assets/react.svg" },
    { name: "ThreeJs", logo: "/assets/ThreeJS logo.png" },
    { name: "Astride", logo: "/assets/AS.png" },
    { name: "Java", logo: "/assets/java.svg" },
    { name: "TypeScript", logo: "/assets/Typescript_logo_2020.svg" }
  ];

  return (
    <div className="relative flex items-center justify-center min-screen">
      <div className="grid grid-cols-3 gap-10 items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-24 h-24 bg-black rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
          </div>
        ))}
      </div>
      <div className="absolute flex items-center justify-center w-32 h-32 shadow-lg">
        <img src="/assets/AS-removebg-preview.png" alt="Main Logo" className="w-50 h-50" />
      </div>
    </div>
  );
};

export default SkillsGrid;
