import "./styles.scss"
import WarningIcon from '../../icons/index'
import { Link } from "react-router-dom"

export default function NotFoundPost() {
    return <div className="not-found-post">
        <WarningIcon width="64" height="64"></WarningIcon>
        <h1>Post não encontrado!</h1>
        <Link to="/blog" className="mt-4">
            <button className="project-button not-found-button">Tela inicial</button>
        </Link>
    </div>
}