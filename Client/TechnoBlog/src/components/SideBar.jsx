import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SideBarTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;
const Post = styled.div``;
const ImgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
`;
const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Title = styled.h3``;

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
const SideBar = () => {
  return (
    <Container>
      <SideBarTitle>Recomended posts</SideBarTitle>
      {posts.map(post => (
        <Post key={post.id}>
          <ImgeContainer>
            <Image src={post.img} alt="blog post" />
          </ImgeContainer>
          <Info>
            <Anchor to={`/post/${post.id}`}>
              <Title>{post.title}</Title>
            </Anchor>
            <Button>read more</Button>
          </Info>
        </Post>
      ))}
    </Container>
  );
};

export default SideBar;
