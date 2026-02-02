import { descriptionText } from "../info";

function Description() {
  return (
    <div className="about">
      {descriptionText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}

export default Description;
