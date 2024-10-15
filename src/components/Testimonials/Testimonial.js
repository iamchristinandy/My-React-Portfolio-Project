import React from "react";

// Reactstrap components

import {Button, CardTitle, Container, Row, Col, Carousel, CarouselItem} from 'reactstrap;'

// Core components
const items = [
    {
        content: (
            <Container>
                <Row>
                    <Col classname='ml-auto' md='5'>
                        <CardTitle tag='h3'>Andrews Baah Kwafo</CardTitle>
                        <h3 className="text-danger">---</h3>
                        <h4 className="lead">
                            Take up one idea. Make up that one idea your vision - think of it,
                            dream of it, live on that idea. Let the brain, muscles, nerves and every part of 
                            your body be full of that idea, and just leave every other idea alone. This is the way to success.
                            A single can be my garden ... a single friend, my world.
                        </h4>
                        <Button
                            className='mt-3'
                            color='danger'
                            href='/profile'
                            onClick={(e) => e.preventDefault()}
                        >
                            Read More
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
]
