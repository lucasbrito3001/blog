// Bootstrap components
import { Badge, Card } from "react-bootstrap";

// styles
import "./styles.scss";

export default function cardPosts({ postImage, postTitle, postCategories, postDescription }) {
    return (
        <Card className="cardPost shadow">
            <Card.Img
                width="100%"
                height="200px"
                variant="top"
                src={postImage}
            />
            <Card.Body className="card-body">
                <div className="card-body-categories">
                    {postCategories.map((category, idx) => {
                        return <Badge key={idx} bg="primary" className="mb-2">
                            {category.text}
                        </Badge>
                    })}
                </div>
                <Card.Title className="card-title">{postTitle}</Card.Title>
                <Card.Text className="text-muted card-subtitle">
                    {postDescription}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
