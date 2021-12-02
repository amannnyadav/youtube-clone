import { Card, Col, Button } from "react-bootstrap";
const CustomTile = ({ title, uploadedAgo, uploadedBy, image, views }) => {
  return (
    <Col>
      <Card bg="muted" >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title class="text-primary"><h3>{title}</h3></Card.Title>
          <Card.Text class="text-secondary">{uploadedBy}</Card.Text>
          <Card.Text class="text-dark">{uploadedAgo} | {views} Views</Card.Text>
          <Button variant="warning">Subscribe</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomTile;