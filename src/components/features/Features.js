import React from 'react'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    Container,
    Row,
    Col,
  } from "reactstrap";
function Features({myref}) {
  return (
    <>
    <section className="section section-lg pt-lg-0 mt--200" ref={myref}>
          <Container>
              <Row className="justify-content-center">
                  <Col lg="12">
                      <Row className="row-grid">
                          <Col lg="4">
                              <Card className="card-lift--hover shadow border-0">
                                  <CardBody className="py-5">
                                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                          <i className="ni ni-check-bold" />
                                      </div>
                                      <h6 className="text-primary text-uppercase">
                                          Download Argon
                                      </h6>
                                      <p className="description mt-3">
                                          Argon is a great free UI package based on Bootstrap
                                          4 that includes the most important components and
                                          features.
                                      </p>
                                      <div>
                                          <Badge color="primary" pill className="mr-1">
                                              design
                                          </Badge>
                                          <Badge color="primary" pill className="mr-1">
                                              system
                                          </Badge>
                                          <Badge color="primary" pill className="mr-1">
                                              creative
                                          </Badge>
                                      </div>
                                      <Button
                                          className="mt-4"
                                          color="primary"
                                          href="/profile"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          About Me
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col lg="4">
                              <Card className="card-lift--hover shadow border-0">
                                  <CardBody className="py-5">
                                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                          <i className="ni ni-istanbul" />
                                      </div>
                                      <h6 className="text-success text-uppercase">
                                          Build Something
                                      </h6>
                                      <p className="description mt-3">
                                          Argon is a great free UI package based on Bootstrap
                                          4 that includes the most important components and
                                          features.
                                      </p>
                                      <div>
                                          <Badge color="success" pill className="mr-1">
                                              business
                                          </Badge>
                                          <Badge color="success" pill className="mr-1">
                                              vision
                                          </Badge>
                                          <Badge color="success" pill className="mr-1">
                                              success
                                          </Badge>
                                      </div>
                                      <Button
                                          className="mt-4"
                                          color="success"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Learn more
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col lg="4">
                              <Card className="card-lift--hover shadow border-0">
                                  <CardBody className="py-5">
                                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                          <i className="ni ni-planet" />
                                      </div>
                                      <h6 className="text-warning text-uppercase">
                                          Prepare Launch
                                      </h6>
                                      <p className="description mt-3">
                                          Argon is a great free UI package based on Bootstrap
                                          4 that includes the most important components and
                                          features.
                                      </p>
                                      <div>
                                          <Badge color="warning" pill className="mr-1">
                                              marketing
                                          </Badge>
                                          <Badge color="warning" pill className="mr-1">
                                              product
                                          </Badge>
                                          <Badge color="warning" pill className="mr-1">
                                              launch
                                          </Badge>
                                      </div>
                                      <Button
                                          className="mt-4"
                                          color="warning"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Learn more
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </Container>
      </section><section className="section section-lg">
              <Container>
                  <Row className="row-grid align-items-center">
                      <Col className="order-md-2" md="6">
                          <img
                              alt="..."
                              className="img-fluid floating"
                              src={require("assets/img/theme/promo-1.png")} />
                      </Col>
                      <Col className="order-md-1" md="6">
                          <div className="pr-md-5">
                              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                  <i className="ni ni-settings-gear-65" />
                              </div>
                              <h3>Awesome features</h3>
                              <p>
                                  The kit comes with three pre-built pages to help you get
                                  started faster. You can change the text and images and
                                  you're good to go.
                              </p>
                              <ul className="list-unstyled mt-5">
                                  <li className="py-2">
                                      <div className="d-flex align-items-center">
                                          <div>
                                              <Badge
                                                  className="badge-circle mr-3"
                                                  color="success"
                                              >
                                                  <i className="ni ni-settings-gear-65" />
                                              </Badge>
                                          </div>
                                          <div>
                                              <h6 className="mb-0">
                                                  Carefully crafted components
                                              </h6>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="py-2">
                                      <div className="d-flex align-items-center">
                                          <div>
                                              <Badge
                                                  className="badge-circle mr-3"
                                                  color="success"
                                              >
                                                  <i className="ni ni-html5" />
                                              </Badge>
                                          </div>
                                          <div>
                                              <h6 className="mb-0">Amazing page examples</h6>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="py-2">
                                      <div className="d-flex align-items-center">
                                          <div>
                                              <Badge
                                                  className="badge-circle mr-3"
                                                  color="success"
                                              >
                                                  <i className="ni ni-satisfied" />
                                              </Badge>
                                          </div>
                                          <div>
                                              <h6 className="mb-0">
                                                  Super friendly support team
                                              </h6>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section><section className="section bg-secondary">
              <Container>
                  <Row className="row-grid align-items-center">
                      <Col md="6">
                          <Card className="bg-default shadow border-0">
                              <CardImg
                                  alt="..."
                                  src={require("assets/img/theme/img-1-1200x1000.jpg")}
                                  top />
                              <blockquote className="card-blockquote">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="svg-bg"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 583 95"
                                  >
                                      <polygon
                                          className="fill-default"
                                          points="0,52 583,95 0,95" />
                                      <polygon
                                          className="fill-default"
                                          opacity=".2"
                                          points="0,42 583,95 683,0 0,95" />
                                  </svg>
                                  <h4 className="display-3 font-weight-bold text-white">
                                      Design System
                                  </h4>
                                  <p className="lead text-italic text-white">
                                      The Arctic Ocean freezes every winter and much of the
                                      sea-ice then thaws every summer, and that process will
                                      continue whatever happens.
                                  </p>
                              </blockquote>
                          </Card>
                      </Col>
                      <Col md="6">
                          <div className="pl-md-5">
                              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                  <i className="ni ni-settings" />
                              </div>
                              <h3>Our customers</h3>
                              <p className="lead">
                                  Don't let your uses guess by attaching tooltips and
                                  popoves to any element. Just make sure you enable them
                                  first via JavaScript.
                              </p>
                              <p>
                                  The kit comes with three pre-built pages to help you get
                                  started faster. You can change the text and images and
                                  you're good to go.
                              </p>
                              <p>
                                  The kit comes with three pre-built pages to help you get
                                  started faster. You can change the text and images and
                                  you're good to go.
                              </p>
                              <a
                                  className="font-weight-bold text-warning mt-5"
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                              >
                                  A beautiful UI Kit for impactful websites
                              </a>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section><section className="section pb-0 bg-gradient-warning">
              <Container>
                  <Row className="row-grid align-items-center">
                      <Col className="order-lg-2 ml-lg-auto" md="6">
                          <div className="position-relative pl-md-5">
                              <img
                                  alt="..."
                                  className="img-center img-fluid"
                                  src={require("assets/img/ill/ill-2.svg")} />
                          </div>
                      </Col>
                      <Col className="order-lg-1" lg="6">
                          <div className="d-flex px-3">
                              <div>
                                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                      <i className="ni ni-building text-primary" />
                                  </div>
                              </div>
                              <div className="pl-4">
                                  <h4 className="display-3 text-white">Modern Interface</h4>
                                  <p className="text-white">
                                      The Arctic Ocean freezes every winter and much of the
                                      sea-ice then thaws every summer, and that process will
                                      continue whatever.
                                  </p>
                              </div>
                          </div>
                          <Card className="shadow shadow-lg--hover mt-5">
                              <CardBody>
                                  <div className="d-flex px-3">
                                      <div>
                                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                              <i className="ni ni-satisfied" />
                                          </div>
                                      </div>
                                      <div className="pl-4">
                                          <h5 className="title text-success">
                                              Awesome Support
                                          </h5>
                                          <p>
                                              The Arctic Ocean freezes every winter and much of
                                              the sea-ice then thaws every summer, and that
                                              process will continue whatever.
                                          </p>
                                          <a
                                              className="text-success"
                                              href="#pablo"
                                              onClick={(e) => e.preventDefault()}
                                          >
                                              Learn more
                                          </a>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                          <Card className="shadow shadow-lg--hover mt-5">
                              <CardBody>
                                  <div className="d-flex px-3">
                                      <div>
                                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                              <i className="ni ni-active-40" />
                                          </div>
                                      </div>
                                      <div className="pl-4">
                                          <h5 className="title text-warning">
                                              Modular Components
                                          </h5>
                                          <p>
                                              The Arctic Ocean freezes every winter and much of
                                              the sea-ice then thaws every summer, and that
                                              process will continue whatever.
                                          </p>
                                          <a
                                              className="text-warning"
                                              href="#pablo"
                                              onClick={(e) => e.preventDefault()}
                                          >
                                              Learn more
                                          </a>
                                      </div>
                                  </div>
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew zindex-100">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 2560 100"
                      x="0"
                      y="0"
                  >
                      <polygon
                          className="fill-white"
                          points="2560 0 2560 100 0 100" />
                  </svg>
              </div>
          </section>
        </>
  )
}

export default Features