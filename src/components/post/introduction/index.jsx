import "./styles.scss"

import Text from "../text/index"

export default function Introduction({intro}) {
    return (
        intro.map((paragraph, idx) => 
            (<Text className="introduction" key={idx} text={paragraph}/>)
        )
    )
}