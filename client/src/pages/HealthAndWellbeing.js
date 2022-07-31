import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import placeholder from "../assets/productivity.png"
import "../styles/Resources.css"

function HealthAndWellbeing() {

    return (
    <div>
        <h1 className="main-heading">Health and Wellbeing</h1>
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
                    <Card.Title>Mental Health</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.mybib.com/">Beyond Blue</a>
                        <p>Beyond Blue is a mental health and wellbeing support organisation. Beyond Blue provides support programs to address issues related to depression, anxiety and other related mental illnesses.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.grammarly.com/">Headspace</a>
                        <p>Headspace is the National Youth Mental Health Foundation, which provides early intervention mental health services to young Australians. Headspace provides this support via online and phone counselling services, and through their headspace centres situated across Australia.</p>
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
                    <Card.Title>Mindfulness</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.mybib.com/">Smiling Mind</a>
                        <p>Smiling Mind is a mindfulness meditation app that is designed to assist people in dealing with the pressure, stress, and challenges of daily life. It does this by providing users with daily meditation and mindfulness exercises.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.grammarly.com/">Insight Timer</a>
                        <p>Insight Timers is an app that aims to help calm the mind, reduce anxiety, manage stress, sleep deeply and improve happiness. Insight Timer does this through providing guided meditations and talks led by meditation and mindfulness experts, neuroscientists, psychologists and more. </p>
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
                    <Card.Title>Fitness</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.mybib.com/">FitOn</a>
                        <p>FitOn is a digital fitness platforms that enables you to achieve your health and fitness goals with unlimited access to the fitness classes, including cardio, strength training, HIIT, Pilates, and much more.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.grammarly.com/">Nike Training Club</a>
                        <p>Nike Training Club is an app that is designed to help you take your home workouts to the next level. With access to 200+ free programs, the App provides a wide range of workouts for all fitness levels.</p>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default HealthAndWellbeing;