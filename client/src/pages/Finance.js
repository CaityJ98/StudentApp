import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import placeholder from "../assets/productivity.png"
import "../styles/Resources.css"


function Finance() {

    return (
        <div>
            <h1 className="main-heading">Finance</h1>
            <Container>
                <Row>
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img 
                        src={placeholder} 
                        className="card-img-top"
                        alt="placeholder pic"
                    />
                    <Card.Body>
                        <Card.Title>Financial Aid</Card.Title>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
    
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img 
                        src={placeholder} 
                        className="card-img-top"
                        alt="placeholder pic"
                    />
                    <Card.Body>
                        <Card.Title>Budgeting</Card.Title>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
    
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img
                        src={placeholder} 
                        className="card-img-top"
                        alt="placeholder pic"
                    />
                    <Card.Body>
                        <Card.Title>Discounts</Card.Title>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img
                        src={placeholder} 
                        className="card-img-top"
                        alt="placeholder pic"
                    />
                    <Card.Body>
                        <Card.Title>Budget Recipes</Card.Title>
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

export default Finance;