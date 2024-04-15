import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84vh;
  background: rgba(254, 250, 234, 0.70);
`;

const Card = styled.div`
  padding: 20px; 
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  width: 80%; 
  flex-direction: column;
  align-items: center; 
`;

const DescriptionText = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 85%;
  margin-left: 65px;
  padding: 12px; 
  margin-bottom: 30px; 
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 40%;
  margin-left: 380px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  align-items: center; 
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Label = styled.label`
  margin-left: 50px;
  display: block;
  padding: 20px;
`;

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Unimplemented password reset logic

    console.log('Password reset link sent to:', email);
  };

  return (
    <>
      <Header />
      <Container>
        <Card>
          <DescriptionText>Enter the email address associated with your account and we'll send you a link to reset your password.</DescriptionText>
          <form onSubmit={handlePasswordReset}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Continue</Button>
          </form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default PasswordReset;
