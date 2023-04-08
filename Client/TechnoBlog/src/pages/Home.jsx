import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CB from "../assets/blogImages/background.png";
const Container = styled.div`
  display: flex;
  padding: 4rem;
  font-size: 1rem;
`;
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Post = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: flex-start;
  text-align: right;
  position: relative;
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
    text-align: left;
  }
`;
const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ImgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 30rem;
  position: relative;
  isolation: isolate;
  &::after {
    content: "";
    height: 100%;
    width: 100%;
    top: 5%;
    left: 5%;
    background: url(${CB});
    background-size: cover;
    background-position: center center;
    position: absolute;
    z-index: -1;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 3rem;
  padding: 0;
  margin: 0;
`;
const Desc = styled.p`
  width: 100%;
`;
const Button = styled.button`
  outline: transparent;
  padding: 1rem;
  border: 2px solid hsla(224, 100%, 15%, 1);
  background: transparent;
`;
const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
const Home = () => {
  return (
    <Container>
      <Posts>
        {posts.map(post => (
          <Post key={post.id}>
            <ImgeContainer>
              <Image src={post.img} alt="blog post" />
            </ImgeContainer>
            <Info>
              <Anchor to={`/post/${post.id}`}>
                <Title>{post.title}</Title>
                <Desc>{post.desc}</Desc>
              </Anchor>
              <Button>read more</Button>
            </Info>
          </Post>
        ))}
      </Posts>
    </Container>
  );
};

export default Home;
