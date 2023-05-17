import { useState } from "react"
import "./styles.scss"

export default function Image({ srcImage, srcAlt }) {
    const [zoomImage, setZoomImage] = useState(false)

    return (
        <img 
            onClick={() => setZoomImage(!zoomImage)} 
            className={`image mb-4 ${zoomImage ? 'zoom-image' : ''}`} 
            src={srcImage} alt={srcAlt} 
        />
    )
}