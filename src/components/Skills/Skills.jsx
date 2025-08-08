import React, { useState } from "react";

import { SKILLS } from "../../Utils/data";
import Skillcard from "./SkillCard/Skillcard";
import SkillsinfoCard from "./SkillsinfoCard/SkillsinfoCard";
import "./Skills.css";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSlectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container" id="skills">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSlectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsinfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
