import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PageContainer = styled.div`
  background: rgba(254, 250, 234, 0.70);
  display: flex;
  flex-direction: column;
  min-height: 86vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const BackButton = styled.button`
  width: 50px;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-size: 18px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  border: 1px solid;
  padding: 5px 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Quantity = styled.span`
  margin: 0 10px;
`;

const Summary = styled.div`
  margin-top: 60px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
`;

const TotalLine = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const CheckoutBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CheckoutBar = styled.div`
  margin-top: 120px;
  width: 30%;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  border-radius: 10px;
  border: 1px solid;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const CheckoutPage = () => {
  const [items, setItems] = useState([
    { name: 'Pineapple Pizza', price: 12.99, quantity: 1 },
    { name: 'Mint Chocolate Pizza', price: 13.99, quantity: 1 },
  ]);

  const handleQuantityChange = (index, delta) => {
    setItems(currentItems =>
      currentItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // Let sale tax is 5%
  const tax = subtotal * 0.05; 
  const serviceFee = 2.99;
  const total = subtotal + tax + serviceFee;

  return (
    <>
        <Header />
        <PageContainer>
            <ContentWrapper>
              <BackButton onClick={handleBack}>←</BackButton>
              <Title>Order Summary</Title>
              <ItemList>
                  {items.map((item, index) => (
                  <Item key={index}>
                      <div>{index + 1}. {item.name}</div>
                      <Price>${item.price.toFixed(2)}</Price>
                      <QuantitySelector>
                          <QuantityButton onClick={() => handleQuantityChange(index, -1)}>-</QuantityButton>
                          <Quantity>{item.quantity}</Quantity>
                          <QuantityButton onClick={() => handleQuantityChange(index, 1)}>+</QuantityButton>
                      </QuantitySelector>
                  </Item>
                  ))}
              </ItemList>
              <Summary>
                  <TotalLine>
                      <div>Subtotal</div>
                      <div>${subtotal.toFixed(2)}</div>
                  </TotalLine>
                  <TotalLine>
                      <div>Tax</div>
                      <div>${tax.toFixed(2)}</div>
                  </TotalLine>
                  <TotalLine>
                      <div>Service Fee</div>
                      <div>${serviceFee.toFixed(2)}</div>
                  </TotalLine>
                  <TotalLine>
                      <div><strong>Total</strong></div>
                      <div><strong>${total.toFixed(2)}</strong></div>
                  </TotalLine>
              </Summary>
              <CheckoutBarContainer>
                <CheckoutBar onClick={() => navigate('/payment')}>Payment</CheckoutBar>
              </CheckoutBarContainer>
            </ContentWrapper>
        </PageContainer>
        <Footer />
    </>
  );
};

export default CheckoutPage;
