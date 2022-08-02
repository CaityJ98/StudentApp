import React from "react";
import { Card, Button } from 'react-bootstrap';


function ResourceCard({ cardimage, title, description, link }) {
  return (
    <Card className="mb-3 shadow">
        <img src={cardimage} className="card-img-top" alt=""/>
        <Card.Body>
            <Card.Title>
                <h3>{title}</h3>
            </Card.Title>
            <Card.Text>
                <p>{description}</p>
            </Card.Text>
            <Button href={link} variant="custom">Find out more</Button>
        </Card.Body>
    </Card>
  );
}

export default ResourceCard;