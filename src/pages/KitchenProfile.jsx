import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(254, 250, 234, 0.70);
  padding: 20px;
  height: 90vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const MenuSection = styled.div`
  border-top: 1px solid #eee;
  padding-top: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DescriptionInput = styled(Input)` 
  margin-bottom: 10px; 
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  padding-top: 20px; 
  padding-botton: 0;
`;

const SaveButton = styled(Button)`
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

function KitchenProfile() {
  const navigate = useNavigate();

  {/*
  const [kitchenDetails, setKitchenDetails] = useState({
    name: '',
    description: '',
    hours: '',
    phone: '',
    address: '',
  });

  const [image, setImage] = useState(null);
  */}


  return (
    <>
        <Header />
        <Container>
            <Section>
                <InputGroup>
                    <Label>Kitchen name</Label>
                    <Input type="text" defaultValue="Artichoke Basille's Pizza" />
                </InputGroup>
                <InputGroup>
                    <Label>Description</Label>
                    <TextArea defaultValue="Since opening their first store in New York City’s East Village in 2008, Artichoke Basille’s Pizza has expanded to eighteen hugely successful locations across the country. They have always impressed critics, fellow chefs, and chowhounds alike." />
                </InputGroup>
                <InputGroup>
                    <Label>Main Image</Label>
                    <Button as="input" type="file" onChange={handleImageChange} />
                </InputGroup>
                <Button>Add menu</Button>
                <MenuSection>
                <MenuItem>
                    <Input type="text" placeholder="Item name" />
                    <DescriptionInput type="text" placeholder="Description" />
                    <Input type="text" placeholder="Price" style={{ width: '100px' }} />
                    <Button>Select Image</Button>
                    <Button>Remove</Button>
                </MenuItem>
                <MenuItem>
                    <Input type="text" placeholder="Item name" />
                    <DescriptionInput type="text" placeholder="Description" />
                    <Input type="text" placeholder="Price" style={{ width: '100px' }} />
                    <Button>Select Image</Button>
                    <Button>Remove</Button>
                </MenuItem>
                </MenuSection>
                <SaveButtonContainer>
                  <SaveButton onClick={() => navigate('/')}>Save Changes</SaveButton>
                </SaveButtonContainer>
            </Section>
            <Section>
                <InputGroup>
                    <Label>Open hours</Label>
                    <Input type="text" defaultValue="Mon-Sun 10:00 AM - 10:00 PM" />
                </InputGroup>
                <InputGroup>
                    <Label>Phone</Label>
                    <Input type="tel" defaultValue="(212) 228-2004" />
                </InputGroup>
                <InputGroup>
                    <Label>Address</Label>
                    <Input type="text" defaultValue="328 E 14th St, New York, NY 10003" />
                </InputGroup>
            </Section>
        </Container>
        <Footer />
    </>
  );
}

export default KitchenProfile;
