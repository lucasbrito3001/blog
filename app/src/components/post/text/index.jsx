import "./styles.scss"

export default function Text({text}) {
    return(
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    )
}