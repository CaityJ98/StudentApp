import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/Resources.css"
import aid from "../assets/aid.png"
import budgeting from "../assets/budgeting.png"
import discounts from "../assets/discounts.png"
import recipes from "../assets/recipes.png"


function Finance() {

    return (
        <div>
            <h1 className="main-heading">Finance</h1>
            <Container>
                <Row>
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img 
                        src={aid} 
                        className="card-img-top"
                        alt="financial aid graphic"
                    />
                    <Card.Body>
                        <Card.Title>Financial Aid</Card.Title>
                        <Card.Text>
                            <p>There are vast financial aids available to students. Stay informed on what these financial aids are and how you can access them</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.gooduniversitiesguide.com.au/scholarships">Scholarships</a>
                            <p>There is a broad range of scholarships available to Australian students that can supplement the costs associated with studying. See The Good Universities Guide for information on what scholarships are available, and whether you may be eligible for them.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.studyassist.gov.au/help-loans">Services Australia</a>
                            <p>StudyAssist provides information on the different HELP loans available to students and whether you may be eligible to receive these loans to help fund your studies.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.servicesaustralia.gov.au/payments-you-can-get-for-higher-education?context=60078">Services Australia payments</a>
                            <p>As a student, you may be entitled to government payments that can help your financial situation while you study. Services Australia provides information on what these payments are, and whether you may be eligible to receive these payments.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
    
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img 
                        src={budgeting} 
                        className="card-img-top"
                        alt="budgeting graphic"
                    />
                    <Card.Body>
                        <Card.Title>Budgeting</Card.Title>
                        <Card.Text>
                            <p>Learn how to manage your money and take control of your financial situation with these budgeting tools.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/au/app/frollo-money-manager/id1179563005">Frollo - Money Manager</a>
                            <p>A money management app that helps you turn around your finances, and get ahead of your financial situation. Frollo allows you to link your accounts, see where your money is going, and helps you to stay on track with your financial goals.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://buddy.download/">Buddy: Budget & Save Money</a>
                            <p>A money management app that helps you set up budgets and track your expenses. Buddy provides users overview of there spendings, income, and savings, and helps users to set up a budget plan that fits their needs.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://goodbudget.com/">GoodBudget</a>
                            <p>A personal finance app used for budget planning, debt tracking, and money management. Goodbudget provide insightful reports that allow you to thoroughly track your spending and saving, and helps you to make sense of your budgeting.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
    
                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img
                        src={discounts} 
                        className="card-img-top"
                        alt="discounts graphic"
                    />
                    <Card.Body>
                        <Card.Title>Discounts</Card.Title>
                        <Card.Text>
                            <p>Be smart with your spending and save your money by taking advantage of the discounts available to you.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.myunidays.com/AU/en-AU">UniDays</a>
                            <p>A discount website and app that allows students to receive discounts to a huge a range of products and services. Unidays is free to sign up for, and provides discounts that are exclusive to students.</p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.groupon.com.au/">Groupon</a>
                            <p>A discount provider that can enables you to save money through the use of virtual coupons. Groupon allows you to access discounts on a wide range of local products and services.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/au/app/half-price-grocery-deals/id1453645622">Half Price: Grocery Deals</a>
                            <p>This app allows you to take advantage of discounts on grocery items by providing all the latest Half Price specials from your favourite Australian supermarkets.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col className="col-12 col-md-6 col-lg-4">
                    <Card className="mb-3 shadow">
                    <img
                        src={recipes} 
                        className="card-img-top"
                        alt="budget recipes graphic"
                    />
                    <Card.Body>
                        <Card.Title>Budget Recipes</Card.Title>
                        <Card.Text>
                            <p>The costs associated with food can take a toll on student budgets. Learn how to reduce your spendings on food with these budget meal recipes.</p>
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.bestrecipes.com.au/budget/galleries/50-budget-friendly-meals-students-stir-fry-curries-fritters/rvqpmwm4">Budget friendly recipes</a>
                            <p>Check out Best Recipe’s ‘50 budget-friendly meals for students’, which focuses on a delicious recipes that fit a cheap budget. </p>  
                            <a className="weblink" target="_blank" rel="noopener noreferrer" href="https://www.bbcgoodfood.com/recipes/collection/student-recipes">Easy Student Recipes</a>
                            <p>Check out Good Food’s student recipes - a collection of recipes that a suited to students with limited cooking experience and low budgets.</p>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <div class="col text-center mt-3 mb-3">
             <Button href="/studentresources" variant="custom">Back to main resources page</Button>
            </div>
        </div>
    )
}

export default Finance;