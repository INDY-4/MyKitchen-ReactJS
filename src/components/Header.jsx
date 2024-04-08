import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { Routes, Route, Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #AA71F2;
  color: white; 
`;

const Span = styled.span`
  cursor: pointer;
  margin: 0 20px; 
`;

const DropdownMenu = styled.div`
  margin-top: 30px;
  position: absolute;
  width: 250px;
  // height: 60px;
  z-index: 100;
  display: ${props => props.show ? 'block' : 'none'};
`;

const DropdownItem = styled.div`
  padding: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  color: black;
  font-size: 12px;
`;

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <NavbarContainer>
      <Span onClick={() => navigate('/')}>MyKitchen</Span>
      <div>
        <Span onClick={() => navigate('/checkout')}>
          <FontAwesomeIcon icon={faCartShopping} />
        </Span>
        <Span onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} />
        </Span>
        <DropdownMenu show={showDropdown}>
          {/*
          <DropdownItem>
            <Link to={`/profile`}>Profile</Link>
          </DropdownItem>
          */}
          <DropdownItem onClick={() => navigate('/profile')}>Profile</DropdownItem>
          <DropdownItem onClick={() => navigate('/login')}>Log in / Log out</DropdownItem>
        </DropdownMenu>
      </div>
    </NavbarContainer>
  );
}

export default Header;
