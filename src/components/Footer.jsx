import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  bottom: 0;
  background: #AA71F2;
  color: white; 
`;

function Footer() {
  return (
    <FooterContainer>
      MyKitchen
    </FooterContainer>
  );
}

export default Footer;
