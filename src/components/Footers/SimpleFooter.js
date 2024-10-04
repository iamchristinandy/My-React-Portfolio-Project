/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import SocialMediaButtons from "../Buttons/SocialMediaButtons";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for checking my work!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <SocialMediaButtons
                color='twitter'
                icon='twitter'
                link='https://twitter.com/iamchristinandy'
                description="Follow me"
                />
                <SocialMediaButtons
                color='facebook'
                icon='facebook-square'
                link='https://www.facebook.com/andrews.baahkwafo'
                description="Like me on Facebook"
                />
                <SocialMediaButtons
                color='github'
                icon='github'
                link='https://github.com/iamchristinandy'
                description="Check my GitHub profile"
                />
                <SocialMediaButtons
                color='dribbble'
                icon='dribbble'
                link='https://dribbble.com/iamchristinandy'
                description="Check my designs on Dribbble"
                />
              </Col>
            </Row>
            <hr />
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://andrewsnaahkwafo.com"
                    target="_blank"
                  >
                    Andrews Baah Kwafo
                  </a>
                </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
