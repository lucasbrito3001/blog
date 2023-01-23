import { Image } from "react-bootstrap";

import "./styles.scss"

export default function Thumbnail({srcImage}) {
    return (
        <Image className="post-thumbnail" src={srcImage}/>
    )
}