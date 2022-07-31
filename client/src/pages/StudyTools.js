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
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://pomofocus.io/">Pomofocus</a>
                        <p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on a task by using a time management method known as the Pomodoro Technique.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://todoist.com/">Todoist</a>
                        <p>Todoist is a productivity tool that allows you to get work and life organized. Collect tasks, organize projects, and plan your day.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://examcountdownapp.com/">Exam Countdown</a>
                        <p>Exam Countdown is an app that allows students to keep track of their study commitments by providing a countdown to important dates, exams, tests, and homework deadlines.</p>
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
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://quizlet.com/en-gb/">Quizlet</a>
                        <p>Quizlet is a web tool and a mobile app that aims to boost students' learning through a number of study tools, which include flashcards and game-based quizzes.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.goconqr.com/">Goconqr</a>
                        <p>GoConqr is an online learning tool that allows you to create, discover and share learning materials, which can include mindmaps, flashcards, quizzes, notes, slides & flowcharts.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.notion.so/">Notion</a>
                        <p>Notion is a project management and note-taking software. It is an all-in-one workspace which allows you to take notes, organise tasks, manage projects and much more. </p>
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
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.mybib.com/">MyBib</a>
                        <p>MyBib is a bibliography and citation generator that makes accurate citations for you to use in your academic assignments and papers.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.grammarly.com/">Grammarly</a>
                        <p>Grammarly is a writing assistant that enables students to proofread and edit their documents. Grammarly checks for various types of spelling, grammar, and punctuation errors, and enhances vocabulary usage.</p>
                        <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.outwrite.com/">Outwrite</a>
                        <p>Outwrites is a writing assistant that enables students to paraphrase sentences, strengthen vocabulary, check for plagiarism, and increase or decrease word count.</p>
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