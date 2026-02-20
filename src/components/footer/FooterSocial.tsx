import { capitalize } from "../../utils";
import { socialMedia } from "../../links";
import SocialMediaIcon from "./SocialMediaIcon";


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
