import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(254, 250, 234, 0.70);
`;

const FormWrapper = styled.div`
  width: 850px;
  background: rgba(254, 250, 234, 0.70);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;    
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  border: none;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PasswordConditions = styled.ul`
  padding: 0;
  list-style: none;
`;

const PasswordCondition = styled.li`
  color: #333;
  margin-bottom: 5px;
  
  &:before {
    content: '• ';
    color: rgb(233.09, 190.7, 85.18); 
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

function AccountCreation() {

    const navigate = useNavigate();

    const handleAccountCreation = (event) => {
        event.preventDefault();
        // After a successful account creation:
        alert("Congratulations! Your account has been successfully created.");
        navigate('/'); 
    };

    return (    
        <>
            <Header />
            <Container>
                <FormWrapper>
                    <Title>Create your account</Title>
                    <Form>
                    <Column>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" />
                        <Label>Username</Label>
                        <Input type="text" placeholder="Username" />
                        <Label>Phone</Label>
                        <Input type="tel" placeholder="Phone" />
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password" />
                        <PasswordConditions>
                            <PasswordCondition>At least 8 characters</PasswordCondition>
                            <PasswordCondition>At least one number (0-9)</PasswordCondition>
                            <PasswordCondition>At least one special character</PasswordCondition>
                        </PasswordConditions>
                    </Column>
                    <Column>
                        <Label>Address Line 1</Label>
                        <Input type="text" placeholder="Address Line 1" />
                        <Label>Address Line 2</Label>
                        <Input type="text" placeholder="Address Line 2" />
                        <Label>City</Label>
                        <Input type="text" placeholder="City" />
                        <Label>State</Label>
                        <Input type="text" placeholder="State" />
                        <Label>ZIP Code</Label>
                        <Input type="text" placeholder="ZIP Code" />
                    </Column>
                    </Form>
                    <ButtonContainer>
                        <Button onClick={handleAccountCreation} type="submit">Create account</Button>
                    </ButtonContainer>
                </FormWrapper>
            </Container>
            <Footer />
        </>
    );
}

export default AccountCreation;