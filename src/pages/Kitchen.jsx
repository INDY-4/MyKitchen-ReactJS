import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom'; 

const PageContainer = styled.div`
    background: rgba(254, 250, 234, 0.70);
    min-height: 100vh;
`;

const HeaderInfo = styled.div`
  padding: 20px;
  //display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const KitchenInfo = styled.div`
  text-align: left;
`;

const ContactInfo = styled.div`
  text-align: right;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const SubText = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductList = styled.div`
  padding: 20px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageHolder = styled.div`
  width: 150px; 
  height: 150px; 
  background-color: #ccc;
  background-image: url(${props => props.backgroundImage}); 
  background-size: cover; // Ensure the image covers the holder
  background-position: center; 
  border-radius: 5px;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Price = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }

`;

const Quantity = styled.span`
  min-width: 20px;
  text-align: center;
`;

const CheckoutBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CheckoutBar = styled.div`
  width: 30%;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  border: 1px solid;
  border-radius: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const KitchenPage = () => {
  const navigate = useNavigate();
  const [pineapplePizzaQuantity, setPineapplePizzaQuantity] = useState(0);
  const [mintChocolatePizzaQuantity, setMintChocolatePizzaQuantity] = useState(0);
  const [bobaPizzaQuantity, setBobaPizzaQuantity] = useState(0);

  return (
    <>
        <Header />
        <PageContainer>
            <HeaderInfo>
                <KitchenInfo>
                    <Title>Artichoke Basille's Pizza</Title>
                    <SubText>Mon - Fri 10:00 AM - 10:00 PM</SubText>
                    <SubText>Artichoke's slices are more like a meal than most of the traditional variety, but its most memorable difference is texture. </SubText>
                </KitchenInfo>
                <ContactInfo>
                    <SubText>Phone (212) 228-2004</SubText>
                    <SubText>Address</SubText>
                    <SubText>328 E 14th St, New York, NY 10003</SubText>
                </ContactInfo>
            </HeaderInfo>
            <ProductList>
                <Product>
                <ImageHolder backgroundImage="/images/pineapple.jpeg "/>
                <ProductInfo>
                    <ProductTitle>Pineapple Pizza</ProductTitle>
                    <ProductDescription>Delicious pineapple with ham and cheese</ProductDescription>
                </ProductInfo>
                <Price>$ 12.99</Price>
                <QuantitySelector>
                  <QuantityButton onClick={() => setPineapplePizzaQuantity(pineapplePizzaQuantity - 1)}>-</QuantityButton>
                  <Quantity>{pineapplePizzaQuantity}</Quantity>
                  <QuantityButton onClick={() => setPineapplePizzaQuantity(pineapplePizzaQuantity + 1)}>+</QuantityButton>
                </QuantitySelector>
                </Product>
                <Product>
                <ImageHolder backgroundImage="/images/mintchocolate.jpeg "/>
                <ProductInfo>
                    <ProductTitle>Mint Chocolate Pizza</ProductTitle>
                    <ProductDescription>Peppermint's fierceness compliments dark chocolate. They produce a robust, well-rounded hit of deep flavor.</ProductDescription>
                </ProductInfo>
                <Price>$ 13.99</Price>
                <QuantitySelector>
                  <QuantityButton onClick={() => setMintChocolatePizzaQuantity(mintChocolatePizzaQuantity - 1)}>-</QuantityButton>
                  <Quantity>{mintChocolatePizzaQuantity}</Quantity>
                  <QuantityButton onClick={() => setMintChocolatePizzaQuantity(mintChocolatePizzaQuantity + 1)}>+</QuantityButton>
                </QuantitySelector>
                </Product>
                <Product>
                <ImageHolder backgroundImage="/images/boba.jpeg "/>
                <ProductInfo>
                    <ProductTitle>Boba Pizza</ProductTitle>
                    <ProductDescription>Mythical Taiwan exclusive boba pizza</ProductDescription>
                </ProductInfo>
                <Price>$ 14.99</Price>
                <QuantitySelector>
                  <QuantityButton onClick={() => setBobaPizzaQuantity(bobaPizzaQuantity - 1)}>-</QuantityButton>
                  <Quantity>{bobaPizzaQuantity}</Quantity>
                  <QuantityButton onClick={() => setBobaPizzaQuantity(bobaPizzaQuantity + 1)}>+</QuantityButton>
                </QuantitySelector>
                </Product>
            </ProductList>
            <CheckoutBarContainer>
              <CheckoutBar onClick={() => navigate('/checkout')}>Checkout</CheckoutBar>
            </CheckoutBarContainer>
        </PageContainer>
        <Footer />
    </>
  );
};

export default KitchenPage;
