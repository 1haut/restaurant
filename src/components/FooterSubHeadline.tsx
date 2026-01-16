type Subheadline = {
    title: string,
    className?: string
}

export default function Headline({title, className}: Subheadline){
    return (<h3 className={className}>{title}</h3>)
}