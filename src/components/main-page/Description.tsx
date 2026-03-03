import { aboutText } from "../../utils/constants";
import { paragraphArrays } from "../../utils/utils";

export default function Description() {
  return (
    <div className="about">
      {paragraphArrays(aboutText).map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
