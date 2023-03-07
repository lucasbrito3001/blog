import "./styles.scss"

export default function Image({srcImage, srcAlt}) {
    return (
        <img className="image mb-4" src={srcImage} alt={srcAlt} />
    )
}