import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(254, 250, 234, 0.70);
  padding: 20px 0;
`;

const SideBar = styled.aside`
  flex: 1;
  padding: 10px;
  border-right: 2px solid #ddd;
`;

const MealTypeButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
`;

const Content = styled.section`
  flex: 3;
  padding: 10px;
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
  margin-bottom: 10px;
`;

const KitchenInfo = styled.div`
  flex: 3;
`;

const GoToKitchenButton = styled.button`
  flex: 1;
  padding: 10px;
  cursor: pointer;
`;

const SeeMoreButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const mealTypes = ['American', 'Italian', 'Mexican', 'Asian', 'Fast Food'];
const kitchens = new Array(5).fill({ img: 'placeholder', name: 'Kitchen name', hours: 'Working hours', phone: 'Phone number' });

function Main() {
    return (
        <div>
            <Header />

            <BodyContainer>
                <SideBar>
                    {mealTypes.map((type) => (
                    <MealTypeButton key={type}>{type}</MealTypeButton>
                    ))}
                </SideBar>
                <Content>
                    <SearchContainer>
                    <SearchInput type="text" placeholder="search by name or zip code" />
                    </SearchContainer>
                    <KitchenList>
                    {kitchens.map((kitchen, index) => (
                        <KitchenCard key={index}>
                        <img src={kitchen.img} alt="Kitchen" />
                        <KitchenInfo>
                            <h3>{kitchen.name}</h3>
                            <p>{kitchen.hours}</p>
                            <p>{kitchen.phone}</p>
                        </KitchenInfo>
                        <GoToKitchenButton>Go to kitchen</GoToKitchenButton>
                        </KitchenCard>
                    ))}
                    <SeeMoreButton>See more</SeeMoreButton>
                    </KitchenList>
                </Content>
            </BodyContainer>

            <Footer />
        </div>
    );
}
    
export default Main;
