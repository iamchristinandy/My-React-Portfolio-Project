import React from 'react'
import { Badge, Button, Card, CardBody } from 'reactstrap'

function SimpleCards( {title, description, color, icon, link, badges}) {
  // Function to return badges
  function returnBadges() {
    return badges?.map((badge, index) => (
      <Badge key={index} color={color} pill className="mr-1">
        {badge}
      </Badge>
    ));
  }
  return (
    <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className={`icon icon-shape icon-shape-${color} rounded-circle mb-4`}>
                    <i className={`ni ni-${icon}`} />
                  </div>
                  <h6 className={`text-${color} text-uppercase`}>
                    {title}
                  </h6>
                  <p className="description mt-3">
                    {description}
                  </p>
                  <div>
                    {returnBadges()}
                  </div>
                  <Button
                    className="mt-4"
                    color={color}
                    href={link}
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </Button>
                </CardBody>
              </Card>
  )
}

export default SimpleCards