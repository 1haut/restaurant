import SocialMediaIcon from "./SocialMediaIcon";
import Headline from "./FooterSubHeadline";
import { socialMediaLinksObject as socialLinks } from "../links";

type FooterSocialsProps = {
  headline: string
}

export default function FooterSocials({ headline }: FooterSocialsProps) {
  return (
    <div className="socials">
      <Headline title={headline} className="call-to-action" />
      <div className="socials-container">
        <SocialMediaIcon
          url={socialLinks.facebook.url}
          iconPath={socialLinks.facebook.iconPath}
        />
        <SocialMediaIcon
          url={socialLinks.instagram.url}
          iconPath={socialLinks.instagram.iconPath}
        />
        <SocialMediaIcon
          url={socialLinks.tiktok.url}
          iconPath={socialLinks.tiktok.iconPath}
        />
        <SocialMediaIcon
          url={socialLinks.twitter.url}
          iconPath={socialLinks.twitter.iconPath}
        />
      </div>
    </div>
  );
}
