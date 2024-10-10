import React from 'react'
import { Badge, Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import SimpleCards from '../Cards/SimpleCards'

function ThreeCards() {
  return (
    <section className="section section-lg pt-lg-0 mt--100">
    <Container>
      <Row className="justify-content-center">
        <Col lg="12">
          <Row className="row-grid">
            <Col lg="4">
              <SimpleCards
              icon="spaceship"
              color="primary"
              title="Frontend"
              description = "Check my Frontend projects"
              badges={["React", "Vue", "Angular", "JavaScript"]}
              link="#"
              />
            </Col>
            <Col lg="4">
              <SimpleCards
                icon="ui-04"
                color="success"
                title="Backend"
                description = "Check my Backend projects"
                badges={["NodeJs", "Python", "C#", "Django"]}
                link="https://github.com/iamchristinandy"
                />
            </Col>
            <Col lg="4">
              <SimpleCards
                  icon="palette"
                  color="warning"
                  title="Design"
                  description = "Check my Design projects"
                  badges={["Figma","Dribbble", "Canva"]}
                  link="https://dribbble.com/iamchristinandy"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default ThreeCards