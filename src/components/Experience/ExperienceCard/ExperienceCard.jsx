import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="project-card">
      <div className="title-icon">
        <h6>{details.title}</h6>
      </div>
      <div className="project-subject">{details.subject}</div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
