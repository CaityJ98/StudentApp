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
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.gooduniversitiesguide.com.au/scholarships">Good Universities Guide - Scholarships</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.servicesaustralia.gov.au/payments-you-can-get-for-higher-education?context=60078">Services Australia</a>
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
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/au/app/frollo-money-manager/id1179563005">Frollo - Money Manager</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://getpocketbook.com/">Pocketbook</a>
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
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.myunidays.com/AU/en-AU">UniDays</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.groupon.com.au/">Groupon</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/au/app/half-price-grocery-deals/id1453645622">Half Price: Grocery Deals</a>
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
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.bestrecipes.com.au/budget/galleries/50-budget-friendly-meals-students-stir-fry-curries-fritters/rvqpmwm4">Best Recipes</a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.bbcgoodfood.com/recipes/collection/student-recipes">Good Food</a>
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