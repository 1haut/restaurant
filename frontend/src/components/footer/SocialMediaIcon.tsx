import { urlPrefix } from "../../utils/constants";

interface IconProps {
  url: string;
  iconPath: string;
  alt: string;
};

export default function SocialMediaIcon({ url, iconPath, alt }: IconProps) {
  return (
    <a href={urlPrefix + url} target="_blank" rel="noreferrer">
      <img alt={alt} src={iconPath} loading="lazy"></img>
    </a>
  );
}
