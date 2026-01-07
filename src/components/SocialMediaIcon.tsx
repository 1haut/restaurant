import { information } from "../info"

const prefix = information.urlPrefix

type IconProps = {
    url: string,
    iconPath: string
}

export default function SocialMediaIcon({url, iconPath}: IconProps){
    return (
        <a href={prefix + url} target="_blank">
            <img src={iconPath}></img>
        </a>
    )
}