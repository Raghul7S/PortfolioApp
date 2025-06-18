import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      <div className="title-icon">
        <h6>{details.title}</h6>
      </div>
      <div className="experience-subject">{details.subject}</div>
      <ul className="experience-details">
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
