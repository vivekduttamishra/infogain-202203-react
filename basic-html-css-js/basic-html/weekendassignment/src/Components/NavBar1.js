import React, { Component } from 'react'
import { Button ,NavbarBrand,NavbarToggler,DropdownItem,Nav,DropdownMenu,Navbar,NavLink,UncontrolledDropdown,DropdownToggle,NavbarText,Collapse,NavItem } from 'reactstrap';


export class NavBar1 extends Component {
  render() {
    return (
      <div>

<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Book's web
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Demo">
            Add Book
          </NavLink>
        </NavItem>
 
      </Nav>
    
    </Collapse>
  </Navbar>
</div>
      </div>
    )
  }
}

export default NavBar1