import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Container = styled.div`
  height: 100vh;
  padding: 4rem;
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
`;
const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
`;
const Input = styled.input`
  padding: 1rem;
  border: 2px solid hsla(224, 100%, 15%, 1);
`;
const TextArea = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  border: 2px solid hsla(224, 100%, 15%, 1);
  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: hsla(224, 100%, 15%, 1);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: hsla(224, 100%, 15%, 1);
  }
`;
const Quill = styled(ReactQuill)`
  flex: 1;
  padding: 0;
  margin: 0;
  height: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 2rem;
  border-radius: 2rem;
`;
const MenuItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid hsla(224, 100%, 15%, 1);
`;
const Cat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
`;
const Span = styled.span``;
const File = styled.input`
  display: none;
`;
const Tag = styled.label`
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  margin: 0.5rem auto;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: hsla(224, 100%, 15%, 1);
  color: white;
  cursor: pointer;
  border-radius: 1rem;
`;
const GhostButton = styled(Button)`
  background-color: transparent;
  border: 2px solid hsla(224, 100%, 15%, 1);
  color: hsla(224, 100%, 15%, 1);
  font-weight: bold;
`;
const NewPost = () => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Content>
        <Input type="text" placeholder="title" />
        <TextArea>
          <Quill theme="snow" value={value} onChange={setValue} />
        </TextArea>
      </Content>
      <MenuContainer>
        <MenuItem>
          <Title>Publish</Title>
          <Span>
            <b>Status:</b> Draft{" "}
          </Span>
          <Span>
            <b>Visibility:</b> Public
          </Span>
          <Tag htmlFor="file">Upload</Tag>
          <File type="file" id="file" />
          <ButtonContainer>
            <GhostButton>Save Draft</GhostButton>
            <Button>Publish</Button>
          </ButtonContainer>
        </MenuItem>
        <MenuItem>
          <Title>Catagories</Title>
          <Cat>
            <Input type="radio" id="Technology" />
            <Tag htmlFor="Tecnology">Technology</Tag>
          </Cat>
          <Cat>
            <Input type="radio" id="Finance" />
            <Tag htmlFor="Finance">Finance</Tag>
          </Cat>
          <Cat>
            <Input type="radio" id="Design" />
            <Tag htmlFor="Design">Design</Tag>
          </Cat>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default NewPost;
