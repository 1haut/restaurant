import { descriptionText } from "../info";

function Description() {
  return descriptionText.map(text => <p>{text}</p>);
}

export default Description