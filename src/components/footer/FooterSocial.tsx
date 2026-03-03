import SocialMediaIcon from "./SocialMediaIcon";
import { capitalize } from "../../utils/utils";
import { socialMedia } from "../../utils/constants";

export default function FooterSocials() {
  return (
    <div className="socials-container">
      {Object.entries(socialMedia).map(([platform, item]) => (
        <SocialMediaIcon
          key={platform}
          alt={capitalize(platform) + " logo"}
          url={item.url}
          iconPath={item.iconPath}
        />
      ))}
    </div>
  );
}
