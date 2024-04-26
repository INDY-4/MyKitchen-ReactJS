import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: rgba(254, 250, 234, 0.70);
`;

const Form = styled.form`
  text-align: left; // Align form elements to the left
  width: 600px; 
  padding: 50px; // Added padding for internal spacing
  background: rgba(254, 250, 234, 0.70);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1); // Added shadow
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 0 1rem;
`;

const SubText = styled.p`
  margin-bottom: 1rem;
  text-align: center;
  cursor: pointer;
  color: #333;
  span {
    color: rgb(233.09, 190.7, 85.18); // Color for "Create an account"
    text-decoration: none;
  }
`;

const Input = styled.input`
  width: calc(100% - 1rem); // Adjust width to account for padding
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const FormFooterText = styled.span`
  color: rgb(233.09, 190.7, 85.18);
  cursor: pointer;
  font-size: 16px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 0.5rem; // Adjusted for spacing
  flex-shrink: 0;
`;

const Label = styled.label`
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userData = {
    email: "merrick@email.com",
    password: "merrick1234"
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate login with dummy data
    if (email === userData.email && password === userData.password) {
      alert("Login Successful !");
      navigate('/'); 
    } else {
      alert("Login Failed: Incorrect email or password.");
    }
  };

  return (
    <>
        <Header />
        <Container>
            <Form onSubmit={handleLogin}>
            <Title>Login</Title>
            
            <Label htmlFor="email">Email</Label>
            <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            
            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            
            <Button type="submit">Login</Button>
            
            <FormFooter>
              <CheckboxContainer>
                <Input type="checkbox" name="remember" />
                Remember me
              </CheckboxContainer>
              <FormFooterText onClick={() => navigate('/reset-password')}>
                Forgot your password?
              </FormFooterText>
            </FormFooter>
            <SubText onClick={() => navigate('/create-account')}>
                Don't have an account? 
                &nbsp;<span>Create an account.</span>
              </SubText>
            </Form>
        </Container>
        <Footer />
    </>
  );
};

export default Login;
