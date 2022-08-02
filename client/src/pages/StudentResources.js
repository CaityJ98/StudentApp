import React from "react";
import { ResourceList } from "../components/ResourceList"
import ResourceCard from "../components/ResourceCard";
import { Container, Row, Col } from 'react-bootstrap';

function StudentResources() {
  return (
    <Container>
        <h1 className="main-heading">Student Resources</h1>
        <Row>
            {ResourceList.map((resourceCard) => {
                return (
                    <Col className="col-12 col-md-6 col-lg-4">
                        <ResourceCard
                            cardimage={resourceCard.cardimage}
                            title={resourceCard.title}
                            description={resourceCard.description}
                            link={resourceCard.link}
                        />
                    </Col>
                );
            })}
        </Row>
    </Container>
  );
}

export default StudentResources;