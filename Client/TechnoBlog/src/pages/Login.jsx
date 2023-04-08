import styled from "styled-components";
import CBG from "../assets/blogImages/circuitBoard.png";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, hsla(0, 0%, 1%, 0.1) 60%, hsla(0, 0%, 1%, 0.2)), url(${CBG});
  background-size: cover;
  color: white;
`;
const H1 = styled.h1`
  font-size: 3rem;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  height: 40%;
  width: 40%;

  /* From https://css.glass */
  background: hsla(190, 100%, 13%, 0.37);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(1rem);
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  outline: transparent;
  background: transparent;
  border-bottom: 3px solid white;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
  ::-moz-selection { /* Code for Firefox */
  background: yellow
`;
const Button = styled.button`
  padding: 1rem;
  background: transparent;
  border: 2px solid white;
  outline: transparent;
  color: white;
`;
const Span = styled.span``;
const Anchor = styled(Link)`
  text-decoration: none;
  color: red;
`;
const Login = () => {
  return (
    <Container>
      <H1>Login</H1>
      <Form>
        <Input required type="text" placeholder="username" name="username"></Input>
        <Input required type="password" placeholder="password" name="password"></Input>
        <Button>LOGIN</Button>
        <Span>
          Dont have an account? <Anchor to="/signup"> Sign Up</Anchor>{" "}
        </Span>
      </Form>
    </Container>
  );
};

export default Login;
