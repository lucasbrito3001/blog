// Bootstrap components
import { Card } from "react-bootstrap";

// styles
import "./styles.scss";

export default function cardPosts({ postImage, postTitle, postDescription }) {
    return (
        <Card className="cardPost shadow">
            <Card.Img
                width="100%"
                height="200px"
                variant="top"
                src={postImage}
            />
            <Card.Body>
                <Card.Title>{postTitle}</Card.Title>
                <Card.Text className="text-muted">{postDescription}</Card.Text>
            </Card.Body>
        </Card>
    );
}
