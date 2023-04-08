import React, { useState } from "react";
import styled from "styled-components";
import CBG from "../assets/blogImages/circuitBoard.png";
import { Link } from "react-router-dom";
import axios from "axios";
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
  color: white;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;

  width: 40%;
  /* From https://css.glass */
  background: hsla(190, 100%, 13%, 0.37);
  backdrop-filter: blur(0.5rem);
  -webkit-backdrop-filter: blur(1rem);
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: transparent;
  outline: transparent;
  border-bottom: 3px solid white;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
`;
const Button = styled.button`
  padding: 1rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  outline: transparent;
`;

const Span = styled.span``;
const Anchor = styled(Link)`
  text-decoration: none;
  color: red;
`;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <H1>Sign Up</H1>
      <Form>
        <Input required type="text" placeholder="name" name="name" onChange={handleChange}></Input>
        <Input required type="email" placeholder="email" name="email" onChange={handleChange}></Input>
        <Input requiredtype="text" placeholder="username" name="username" onChange={handleChange}></Input>
        <Input required type="password" placeholder="password" name="password" onChange={handleChange}></Input>
        <Button onClick={handleSubmit}>Sign Up</Button>
        <Span>
          Already have an account? <Anchor to="/login"> Login</Anchor>{" "}
        </Span>
      </Form>
    </Container>
  );
};

export default SignUp;
