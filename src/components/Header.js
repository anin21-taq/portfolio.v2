import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logoImg from "../images/logo1.png"; // Pastikan file ini ada

// Logo
const Logo = styled(Link)`
  text-decoration: none;
`;

// Header container
const HeaderContainer = styled.header`
  background: #0d1117; /* hitam kebiruan */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;

  .site-logo {
    height: 80px;
    width: auto;
    display: block;
  }
`;

// Navigation wrapper
const Nav = styled.nav`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Menu
const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #161b22;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Menu link
const NavLink = styled(Link)`
  color: #c9d1d9;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #58a6ff; /* biru neon */
    transform: translateY(-2px);
  }
`;

// Hamburger button
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #c9d1d9;
    margin: 4px 0;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src={logoImg} alt="Logo" className="site-logo" />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/about">Tentang</NavLink>
          <NavLink to="/portfolio">Proyek</NavLink>
          <NavLink to="/contact">Kontak</NavLink>
        </NavMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
