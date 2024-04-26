import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(254, 250, 234, 0.70);
  padding: 20px;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 48%;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 10px;
  width: 95%;
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
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DescriptionInput = styled(Input)` 
  margin-bottom: 10px; 
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  padding: 20px 0;
  margin-top: auto; 
`;

const SaveButton = styled(Button)`
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 10px;
`;

function KitchenProfile() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const kitchenId = 1;

  const handleImageChange = async (event) => {
    event.preventDefault();
  
    if (selectedImage) {
      const input = { kitchenId, selectedImage };
      const [data, error] = await updateImage('url', input);
  
      if (error) {
        console.error('Error uploading image:', error);
      } else {
        console.log('Image uploaded successfully:', data);
      }
    } else {
      console.error('No image selected');
    }
  };

  const updateImage = async (url, input) => {
    try {
        const formData = new FormData();
        formData.append('kitchen_id', input.kitchenId)
        formData.append('product_image', input.selectedImage)

        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        return [data, null];
      } catch (error) {
        console.error(error);
        return [null, error];
      }
  }
  

{/*
  const handleSaveChanges = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData();
    formData.append('kitchen_name', kitchenDetails.name);
    formData.append('kitchen_working_hours', JSON.stringify(kitchenDetails.hours)); 

    // If a new main image was selected, append it to the FormData
    if (selectedImage) {
      formData.append('mainImage', selectedImage);
    }

    // Make an API call to update the kitchen profile
    try {
      const response = await axios.post(`https://indy-api.zoty.us/kitchens/select?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        console.log('Kitchen updated successfully!');
        navigate('/');
      } else {
        console.error('Failed to update kitchen', response.data);
      }
    } catch (error) {
      console.error('Error updating kitchen:', error);
    }
  };
  */}


return (
    <>
      <Header />
      <Container>
        <Section>
          <InputGroup>
            <Label>Kitchen name</Label>
            <Input type="text" placeholder="Enter kitchen name" />
          </InputGroup>
          <InputGroup>
            <Label>Description</Label>
            <Input type="text" placeholder="Enter kitchen description" />
          </InputGroup>
          <ImageContainer>
            <Label htmlFor="imageInput">Main Image</Label>
            <Button as="input" id="imageInput" type="file" onChange={handleImageChange} />
          </ImageContainer>
          <MenuSection>
            <Label>Kitchen Menu&emsp;</Label>
            <Button>Add menu</Button>
            <MenuItem>
              <Input type="text" placeholder="Item name" />
              <DescriptionInput type="text" placeholder="Description" />
              <Input type="text" placeholder="Price" style={{ width: '100px' }} />
              <Button as="input" type="file" onChange={handleImageChange} />
              <Button>Remove</Button>
            </MenuItem>
            <MenuItem>
              <Input type="text" placeholder="Item name" />
              <DescriptionInput type="text" placeholder="Description" />
              <Input type="text" placeholder="Price" style={{ width: '100px' }} />
              <Button as="input" type="file" onChange={handleImageChange} />
              <Button>Remove</Button>
            </MenuItem>
          </MenuSection>
        </Section>
        <Section>
          <InputGroup>
            <Label>Open hours</Label>
            <Input type="text" placeholder="Enter open hours" />
          </InputGroup>
          <InputGroup>
            <Label>Phone</Label>
            <Input type="tel" placeholder="Enter phone number" />
          </InputGroup>
          <InputGroup>
            <Label>Address</Label>
            <Input type="text" placeholder="Enter kitchen address" />
          </InputGroup>
        </Section>
        <SaveButtonContainer>
          <SaveButton onClick={() => navigate('/')}>Save Changes</SaveButton>
        </SaveButtonContainer>
      </Container>
      <Footer />
    </>
  );
}

export default KitchenProfile;
