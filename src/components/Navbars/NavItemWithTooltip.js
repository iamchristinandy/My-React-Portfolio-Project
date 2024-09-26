import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem, UncontrolledTooltip } from 'reactstrap'

const NavItemWithTooltip = ({title, description, link}) => {
  return (
    <NavItem>
       <NavLink
           className="nav-link-icon"
           href="https://www.facebook.com/creativetim"
           id="tooltip333589074"
              target="_blank"
       >
            <i className="fa fa-facebook-square" />
            <span className="nav-link-inner--text d-lg-none ml-2">
            Facebook
            </span>
        </NavLink>
            <UncontrolledTooltip delay={0} target="tooltip333589074">
            Like us on Facebook
           </UncontrolledTooltip>
    </NavItem>
  )
}

export default NavItemWithTooltip