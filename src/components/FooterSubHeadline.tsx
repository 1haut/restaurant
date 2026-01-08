type Subheadline = {
    content: string,
    className?: string
}

export default function Headline({content, className}: Subheadline){
    return (<h3 className={className}>{content}</h3>)
}