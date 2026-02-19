import { information } from "../info"

const prefix = information.urlPrefix

type IconProps = {
    url: string,
    iconPath: string,
    alt: string
}

export default function SocialMediaIcon({url, iconPath, alt}: IconProps){
    return (
        <a href={prefix + url} target="_blank" rel="noreferrer">
            <img alt={alt} src={iconPath} loading="lazy"></img>
        </a>
    )
}