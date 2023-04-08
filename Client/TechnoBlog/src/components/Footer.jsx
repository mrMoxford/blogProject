import styled from "styled-components";
import Tecnobabel from "../assets/blogImages/LogoFooter.png";
const Container = styled.div`
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsla(224, 100%, 15%, 1);
  color: white;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  height: 4rem;
`;
const Quote = styled.p``;

const Footer = () => {
  return (
    <Container>
      <Logo>
        <LogoImage src={Tecnobabel} alt="Technobabel logo" />
      </Logo>
      <Quote>cognitio, passio et exploratio</Quote>
    </Container>
  );
};

export default Footer;
