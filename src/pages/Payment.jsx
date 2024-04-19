import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  background: rgba(254, 250, 234, 0.70);
  height: 80vh;
`;

const OrderSummary = styled.div`
  width: 40%; 
  height: 66vh;
  padding: 30px;
  margin-top: 40px;
  background: rgba(254, 250, 234, 0.70);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 37px;
`;

const PayButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FormSection = styled.section`
  width: 40%; 
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgba(254, 250, 234, 0.70);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormItem = styled.div`
  margin-bottom: 20px;
  padding: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 0px;
  margin-top: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <PageContainer>
        <OrderSummary>
          <h2>Artichoke Basille’s Pizza</h2>
          <SummaryItem>
            <span>Subtotal</span>
            <span>$ 26.98</span>
          </SummaryItem>
          <SummaryItem>
            <span>Tax</span>
            <span>$ 1.35</span>
          </SummaryItem>
          <SummaryItem>
            <span>Service Fee</span>
            <span>$ 2.99</span>
          </SummaryItem>
          <SummaryItem>
            <span>Total</span>
            <span>$ 31.32</span>
          </SummaryItem>
        </OrderSummary>
        <FormSection>
          <FormItem>
            <Label>Deliver to</Label>
            <Input type="text" placeholder="Address" />
          </FormItem>
          <FormItem>
            <Label>Payment Info</Label>
          </FormItem>
          <FormItem>
            <Label>Card number</Label>
            <Input type="text" placeholder="1234 5678 9012 3456" />
          </FormItem>
          <FormItem>
            <Label>Expire date</Label>
            <Input type="text" placeholder="MM/YY" />
          </FormItem>
          <FormItem>
            <Label>CVC</Label>
            <Input type="text" placeholder="CVC" />
          </FormItem>
          <PayButton onClick={() => navigate('/order-confirmation')}>Pay $ 31.32</PayButton>
        </FormSection>
      </PageContainer>
      <Footer /> 
    </>
  );
};

export default PaymentPage;