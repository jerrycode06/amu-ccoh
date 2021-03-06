import React from "react";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import mainLogo from "../../images/logo.png";

const Navbar = ({ toggle, op }) => {
  return (
    <>
      <Nav op={op}>
        <NavbarContainer>
          <Navlogo to="/">
            <img src={mainLogo} alt="Logo" />
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
