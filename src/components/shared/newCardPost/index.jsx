// Bootstrap components
import { Badge, Card } from "react-bootstrap";

// styles
import "./styles.scss";

export default function newCardPosts({ postImage, postTitle, postDate, postCategories, postDescription }) {
    return (
        <Card className='cardPost shadow p-3 h-100'>
            <Card.Body className="card-body">
                <div className="card-body-categories">
                    {postCategories.map((category, idx) => {
                        return <Badge key={idx} bg="primary" className="mb-2">
                            {category.text}
                        </Badge>
                    })}
                </div>
                <Card.Title className="card-title mb-0">{postTitle}</Card.Title>
                <Card.Text className="text-muted card-subtitle">
                    <small>{new Date(postDate).toLocaleDateString('pt-BR', { timezone: 'UTC' })}</small>
                    <p className="mb-0 card-description">{postDescription}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
