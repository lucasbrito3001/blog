import "./styles.scss"

export default function Introduction({intro}) {
    return (
        intro.map((paragraph, idx) => 
            (<p className="introduction" key={idx}>{paragraph}</p>)
        )
    )
}