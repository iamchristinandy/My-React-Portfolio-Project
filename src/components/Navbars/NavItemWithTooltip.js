import React from 'react'
import { NavItem, UncontrolledTooltip } from 'reactstrap'
import '../Navbars/socialiconscolour.css'

const NavItemWithTooltip = ({title, description, icon, link}) => {
  return (
    <NavItem>
       <a
           className="nav-link-icon"
           href={link}
           id={`tooltip-${icon}-${title}`}
              target="_blank"
       >
            <i className={`fa fa-${icon}`} />
            <span className="nav-link-inner--text d-lg-none ml-2">{title}</span>
        </a>
            <UncontrolledTooltip delay={0} target={`tooltip-${icon}-${title}`}>
            {description}
           </UncontrolledTooltip>
    </NavItem>
  )
}

export default NavItemWithTooltip;