import "./styles.scss"

import Text from "../text/index"

export default function Introduction({intro}) {
    return (
        <div className="introduction">
            <Text text={intro}/>
        </div>
    )
}