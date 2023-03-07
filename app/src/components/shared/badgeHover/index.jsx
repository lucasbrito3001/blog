import "./styles.scss"

export default function badgeHover({ text }) {
    return (
        <div className="badge-wrapper">
            <span className="badge-text">{ text }</span>
            <div className="badge-bg-hover"></div>
        </div>
    );
}
