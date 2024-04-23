import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(254, 250, 234, 0.70);
  padding: 20px 0;
  min-height: 100vh;
`;

const SideBar = styled.aside`
  flex: 1;
  padding: 10px;
  border-right: 2px solid #ddd;
  margin-left: 20px; 
  flex-direction: column;
`;

const MealTypeButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  border: 1px solid;
  border-radius: 10px;
  background: rgba(254, 250, 234, 0.70);
`;

const Content = styled.section`
  flex: 3;
  padding: 10px;
  margin: 50px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const KitchenList = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const KitchenCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const KitchenInfo = styled.div`
  flex: 3;
`;

const GoToKitchenButton = styled.button`
  flex: 1;
  padding: 5px;
  cursor: pointer;
  margin-top: 100px;
  border-radius: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const SeeMoreButton = styled.button`
  width: 40%;
  padding: 10px;
  margin-left: 300px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(180deg, rgb(233.09, 190.7, 85.18) 0%, rgb(255, 240.03, 202.74) 100%);
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Image = styled.img`
  width: 100%; 
  height: auto; 
  max-width: 150px; 
  max-height: 150px; 
  object-fit: cover; // This will cover the area of the box without stretching the image
  margin-right: 40px;
`;


const mealTypes = ['American', 'Italian', 'Mexican', 'Asian', 'Home Cooked'];
const initialKitchens = [
  { img: '/images/pizzamain.jpeg', name: "Artichoke Basille's Pizza", days: 'Mon - Sun', hours: '10 AM - 10 PM', phone: '(212) 228-2004', type: 'American' },
  { img: '/images/thaimain.jpeg', name: 'Thai Ruby', days: 'Mon - Sat', hours: '11 AM - 9 PM', phone: '(234) 567-8901', type: 'Asian' },
  { img: '/images/homecookmain.jpeg', name: "Nick's Home Cooking", days: 'Mon - Fri', hours: '8 AM - 8 PM', phone: '(345) 678-9012', type: 'Home Cooked' },
];


function Main() {
  const navigate = useNavigate();
  const [selectedMealType, setSelectedMealType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  // const [kitchens, setKitchens] = useState(initialKitchens);
  const [kitchens, setKitchens] = useState([]);

  useEffect(() => {
    const kitchenIds = [1, 2];
    const fetchKitchens = async () => {
      try {
        const requests = kitchenIds.map(id =>
          axios.get(`https://indy-api.zoty.us/kitchens/select?id=${id}`)
        );
        // Waits for all of requests to complete
        const responses = await Promise.all(requests);
        const allKitchens = responses.map(response => {
          // When the request was successful
          if (response.status === 200) {
            // Each response returns an array in data.data
            return response.data.data[0];
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        });
        setKitchens(allKitchens);        
      } catch (error) {
        console.error('Error fetching kitchens:', error);
      }
    };
    fetchKitchens();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleMealTypeClick = (type) => {
    setSelectedMealType(type);
    setSearchTerm('');
  };

  // Filter kitchens first by meal type
  const kitchensByMealType = selectedMealType === 'All'
    ? kitchens
    : kitchens.filter(kitchen => kitchen.type === selectedMealType);

  // Then apply the search term filter to the result
  const filteredKitchens = searchTerm
    ? kitchensByMealType.filter(kitchen =>
      kitchen.name.toLowerCase().includes(searchTerm)
    )
    : kitchensByMealType;

  return (
    <>
      <Header />
      <BodyContainer>
        <SideBar>
          <br />
          <br />
          Meal Type
          {['All', ...mealTypes].map((type) => (
            <MealTypeButton key={type} onClick={() => handleMealTypeClick(type)}>
              {type}
            </MealTypeButton>
          ))}
        </SideBar>
        <Content>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="search by name or zip code"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>
          <KitchenList>
            {kitchens.map((kitchen, index) => (
              <KitchenCard key={index}>
                <Image src={kitchen.img} alt="Kitchen" />
                <KitchenInfo>
                  <h3>{kitchen.kitchen_name}</h3>
                  <p>{kitchen.kitchen_working_hours}</p>
                  <p>Phone: 123-456-7890</p>
                </KitchenInfo>
                <GoToKitchenButton onClick={() => navigate('/kitchen-page')}>Go to kitchen</GoToKitchenButton>
              </KitchenCard>
            ))}
            <SeeMoreButton>See more</SeeMoreButton>
          </KitchenList>
        </Content>
      </BodyContainer>
      <Footer />
    </>
  );
}

export default Main;
