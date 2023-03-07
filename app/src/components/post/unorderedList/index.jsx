import "./styles.scss"

export default function UnorderedList({list}) {
    return (
        <ul className="unordered-list">
            {list.map((item, idx) => <li className="unordered-list-item" key={idx}>{item}</li>)}
        </ul>
    )
}