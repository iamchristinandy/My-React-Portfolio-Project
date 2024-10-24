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
import React, {useRef} from "react";
import NavBar from '../components/Navbars/DemoNavbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footers/SimpleFooter';
import ThreeCards from "../components/ThreeCards/ThreeCards";
import Features from "../components/features/Features";
// import Testimonial from "../components/Testimonials/Testimonial"

function Index () {
  const frontend = useRef(null)
  const backend = useRef(null)
  function scrollTo(to){
    switch (to) {
      case 'Frontend':
        frontend.current.scrollIntoView();
        break;
      case 'Backend':
        backend.current.scrollIntoView();
        break;
      case 'Design':
        break;
       default:
        break;
    }
    // console.log('Index', to)

  }
    return (
      <React.Fragment>

        <NavBar scrollTo={scrollTo}/>
        <Hero />
        <ThreeCards />
        {/* <Testimonial /> */}
        <Features myref={frontend}/>
        <Footer />
      </React.Fragment>
    );    
  }

export default Index;
