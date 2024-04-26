import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Container = styled.div`
  text-align: center;
  background: rgba(254, 250, 234, 1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CheckMarkContainer = styled.div`
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  margin: 10px 0;
  padding: 10px;
  font-size: 2em; 
`;

const ConfirmationMessage = styled.h1`
  margin: 20px 0;
`;

const DeliveryAddress = styled.p`
  margin: 10px 0;
  padding: 15px;
`;

const GoogleMapsLink = styled.a`
  color: blue;
  text-decoration: underline;
  margin: 10px 0;
  display: inline-block;
  padding: 15px;
`;

const DiscoverButton = styled.button`
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  width: 30%;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <CheckMarkContainer>✔</CheckMarkContainer>
        <ConfirmationMessage>Thank you for your order.</ConfirmationMessage>
        <DeliveryAddress>Deliver to: 1000 Chastain Rd NW, Kennesaw, GA 30144</DeliveryAddress>
        <DiscoverButton onClick={() => navigate('/')}>
          Discover new kitchens
        </DiscoverButton>
      </Container>
      <Footer />
    </>
  );
};

export default OrderConfirmationPage;
