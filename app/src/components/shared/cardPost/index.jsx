// Bootstrap components
import { Badge, Card } from "react-bootstrap";

// styles
import "./styles.scss";

export default function cardPosts({ postImage, postTitle, postDate, postCategories, postDescription, includeImage = true }) {
    return (
        <Card className={`cardPost shadow ${!includeImage ? 'pt-4 pb-3' : ''}`}>
            { includeImage && <Card.Img
                width="100%"
                height="100%"
                variant="top"
                src={postImage}
                className="d-block"
            /> }
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
                    <p className="mb-0">{postDescription}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
