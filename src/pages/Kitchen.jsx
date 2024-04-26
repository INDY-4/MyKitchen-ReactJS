import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

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
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get('https://indy-api.zoty.us/products/select?kitchen_id=1')
      .then(response => {
        if(response.data.status === 1) {
          setProducts(response.data.data);
          // Initialize quantities for each product
          const initialQuantities = {};
          response.data.data.forEach(product => {
            initialQuantities[product.product_id] = 0;
          });
          setQuantities(initialQuantities);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  // Function to update quantity
  const updateQuantity = (productId, qty) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] + qty, 0)
    }));
  };

  const handleCheckout = () => {
    const itemsToCheckout = products.map(product => {
      return {
        name: product.product_title,
        price: parseFloat(product.product_price),
        quantity: quantities[product.product_id],
      };
    }).filter(item => item.quantity > 0); // This will filter out items with 0 quantity
    navigate('/checkout', { state: { items: itemsToCheckout } });
  };
  

  return (
    <>
        <Header />
        <PageContainer>
            <HeaderInfo>
                <KitchenInfo>
                    <Title>Nick's Home Cooking</Title>
                    <SubText>Mon - Fri 08:00 AM - 08:00 PM</SubText>
                    <SubText>Nick's homeCooked meals are delicious & family-friendly. </SubText>
                </KitchenInfo>
                <ContactInfo>
                    <SubText>Phone (123) 456-7890</SubText>
                    <SubText>Address</SubText>
                    <SubText>1100 South Marietta Pkwy SE, Marietta, GA 30060</SubText>
                </ContactInfo>
            </HeaderInfo>
            <ProductList>
          {products.map(product => (
            <Product key={product.product_id}>
              <ImageHolder backgroundImage={product.product_image_url} />
              <ProductInfo>
                <ProductTitle>{product.product_title}</ProductTitle>
                <ProductDescription>{product.product_desc}</ProductDescription>
              </ProductInfo>
              <Price>$ {product.product_price}</Price>
              <QuantitySelector>
                <QuantityButton onClick={() => updateQuantity(product.product_id, -1)}>-</QuantityButton>
                <Quantity>{quantities[product.product_id]}</Quantity>
                <QuantityButton onClick={() => updateQuantity(product.product_id, 1)}>+</QuantityButton>
              </QuantitySelector>
            </Product>
          ))}
        </ProductList>
            <CheckoutBarContainer>
              <CheckoutBar onClick={handleCheckout}>Checkout</CheckoutBar>
              
            </CheckoutBarContainer>
        </PageContainer>
        <Footer />
    </>
  );
};

export default KitchenPage;
