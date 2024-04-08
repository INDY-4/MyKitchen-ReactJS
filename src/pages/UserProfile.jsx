import React, { useState } from 'react';
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

function UserProfile() {

  const formData = useState({
    user_id: 4,
    user_name: 'nick',
    user_pass: '2e315dcaa77983999bf11106c65229dc',
    user_email: 'nick@zoty.us'
  });
  
  async function submitFormData() {
    try {
      const form_data = new FormData();
      form_data.append('user_id', formData.user_id);
      form_data.append('user_name', formData.user_name);
      form_data.append('user_pass', formData.user_pass);
      form_data.append('user_email', formData.user_email);
      
      const response = await fetch('/user', {
        method: 'POST',
        body: form_data
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to submit form data:', error);
    }
  }
  submitFormData();
  
  return (  
        <>
            <Header />
            <Container>
                <FormWrapper>
                    <Title>User Profile</Title>
                    <Form>
                    <Column>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          placeholder="Email"
                        />
                        <Label>Username</Label>
                        <Input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          placeholder="Username"
                        />
                        <Label>Phone</Label>
                        <Input type="tel" placeholder="Phone" />
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password" />
                        <Label>New Password</Label>
                        <Input type="password" placeholder="New Password" />
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
                    <Button type="submit">Save Changes</Button>
                </FormWrapper>
            </Container>
            <Footer />
        </>
  );
}

export default UserProfile;