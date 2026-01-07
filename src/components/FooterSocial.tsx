import SocialMediaIcon from "./SocialMediaIcon";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import TiktokIcon from "../assets/icons/tiktok-icon.svg";

export default function FooterSocials() {
  return (
    <div className="socials">
      <h3 className="call-to-action">Følg oss gjerne!</h3>
      <div className="socials-container">
        <SocialMediaIcon url="facebook.com" iconPath={FacebookIcon} />
        <SocialMediaIcon url="instagram.com" iconPath={InstagramIcon} />
        <SocialMediaIcon url="tiktok.com" iconPath={TiktokIcon} />
        <SocialMediaIcon url="twitter.com" iconPath={TwitterIcon} />
      </div>
    </div>
  );
}
