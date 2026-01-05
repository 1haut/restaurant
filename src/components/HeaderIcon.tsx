type ImageSourceProp = {
    src: string;
}

export default function HeaderIcon({src}: ImageSourceProp){
    return (<img src={src} />)
}