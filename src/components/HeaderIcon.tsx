type ImageSourceProps = {
    src: string;
    className?: string
}

export default function HeaderIcon({src, className}: ImageSourceProps){
    return (<img src={src} className={className}/>)
}

