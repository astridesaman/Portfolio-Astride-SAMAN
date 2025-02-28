import React from "react";

const SkillsGrid = () => {
  const skills = [
    { name: "Python", logo: "/assets/logo/python-logo-only.svg" },
    { name: "MySQL", logo: "/assets/logo/mysql.svg" },
    { name: "React.js", logo: "/assets/logo/react.svg" },
    { name: "ThreeJs", logo: "/assets/logo/docker.png" },
    { name: "Java", logo: "/assets/logo/java.svg" },
    { name: "TypeScript", logo: "/assets/logo/Typescript_logo_2020.svg" }
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
  
    </div>
  );
};

export default SkillsGrid;
