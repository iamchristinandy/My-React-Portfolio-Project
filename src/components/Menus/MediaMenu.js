import React from 'react'
import { Media } from 'reactstrap/lib/Media';

function MediaMenu() {
  return (
    <Media
       className="d-flex align-items-center"
       href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
       target="_blank"
    >
        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
          <i className="ni ni-spaceship" />
        </div>
        <Media body className="ml-3">
             <h6 className="heading text-primary mb-md-1">
               Getting started
             </h6>
             <p className="description d-none d-md-inline-block mb-0">
                 Learn how to use Argon compiling Scss, change
                 brand colors and more.
              </p>
         </Media>
    </Media>
  )
}

export default MediaMenu;