import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import TechnoBabel from "../assets/blogImages/Logo.png";

const Container = styled.div`
  margin-top: auto;
  padding-inline: 4rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LogoImg = styled.img`
  height: 4rem;
`;
const Cat = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <LogoImg src={TechnoBabel} alt="technobabel logo" />
      </Logo>
      <Cat>
        <Nav to="/">Home</Nav>
        <Nav to="/?cat=technology">Technology</Nav>
        <Nav to="/?cat=finance">Finance</Nav>
        <Nav to="/?cat=design">Design</Nav>
        <Nav to="/write">New Post</Nav>
        <Nav to="/login">Login</Nav>
        <Nav to="/signup">Sign-Up</Nav>
      </Cat>
    </Container>
  );
};

export default Navbar;
