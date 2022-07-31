import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import productivity from "../assets/productivity.png"
import studyaids from "../assets/studyaids.png"
import assignments from "../assets/assignments.png"
import "../styles/StudyTools.css"

function StudyTools() {

    return (
    <div>
        <h1>Study Tools</h1>
        <Container>
            <Row>
                <Col className="col-12 col-md-6 col-lg-4">
                <Card className="mb-3 shadow">
                <img 
                    src={productivity} 
                    className="card-img-top"
                    alt="productivity graphic"
                />
                <Card.Body>
                    <Card.Title>Productivity</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col className="col-12 col-md-6 col-lg-4">
                <Card className="mb-3 shadow">
                <img 
                    src={studyaids} 
                    className="card-img-top"
                    alt="study aid graphic"
                />
                <Card.Body>
                    <Card.Title>Study Aids</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                <Col className="col-12 col-md-6 col-lg-4">
                <Card className="mb-3 shadow">
                <img
                    src={assignments} 
                    className="card-img-top"
                    alt="assignment graphic"
                />
                <Card.Body>
                    <Card.Title>Assignment Resources</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default StudyTools;