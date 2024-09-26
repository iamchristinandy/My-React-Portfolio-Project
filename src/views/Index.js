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
import React from "react";
import NavBar from '../components/Navbars/DemoNavbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footers/SimpleFooter';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Hero />
        <Footer />
      </React.Fragment>
    );    
  }
}

export default Index;
