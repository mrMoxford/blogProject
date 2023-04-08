import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import user1 from "../assets/blogImages/User-01.png";
import SideBar from "../components/SideBar";
const Container = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`;
const Content = styled.div`
  flex: 2;
`;
const BlogImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ProfilePic = styled.img`
  height: 4rem;
  aspect-ratio: 1;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.span`
  font-weight: bold;
`;
const PostDate = styled.p`
  margin: 0;
`;
const Menu = styled.div`
  flex: 1;
`;
const PostEdits = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const EditButton = styled(Link)``;
const DeleteButton = styled.i``;
const Title = styled.h1``;
const Blog = styled.p`
  text-align: justify;
  line-height: 2;
`;
const blog = {
  id: 2,
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};
const BlogDetail = () => {
  return (
    <Container>
      <Content>
        <BlogImage src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="blog post" />
        <User>
          <ProfilePic src={user1} alt="Jackie profile" />
          <UserInfo>
            <Name>Jackie</Name>
            <PostDate>Posted 2 days ago</PostDate>
          </UserInfo>
          <PostEdits>
            <EditButton to="/write?edit=2">
              <FiEdit size={"2rem"} color={"hsla(230, 93%, 31%, 1)"} />
            </EditButton>
            <DeleteButton>
              <RiDeleteBin6Line size={"2rem"} color={"hsla(230, 93%, 31%, 1)"} />
            </DeleteButton>
          </PostEdits>
        </User>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit</Title>
        <Blog>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officiis voluptates iure, voluptatum vero aliquid placeat. Rerum sunt molestias, nostrum ipsa totam hic culpa illo, numquam
          omnis quas nam cumque. Voluptatibus doloremque eligendi vel! Dolorum mollitia nulla perspiciatis voluptatem aliquam dolores, alias aliquid ex et. Harum, quisquam laudantium repudiandae vitae
          exercitationem ea officia velit quibusdam expedita amet illo totam architecto? Possimus, perspiciatis alias, blanditiis ipsa error exercitationem dicta culpa id quis voluptates fugit
          inventore, accusantium fuga quaerat enim veniam deleniti! Alias magnam debitis minus, dolore ipsam doloremque nisi sequi tempore. Quas quod deserunt vitae nisi, tempore, fugiat magnam
          veniam, illum molestiae voluptate a omnis alias rerum totam? <br /> Dolore, consequatur illum? Vero sapiente accusamus at eius nulla. Omnis rerum voluptate magni. Nesciunt, vel! Nam aliquid
          ad amet iste, corrupti voluptates vel, quae reiciendis, ipsam dolor animi minus voluptatibus laborum tempora assumenda! Quia vero a sit adipisci, eaque officia quos ab natus. Facere
          delectus, iure, voluptas veritatis sint suscipit adipisci reprehenderit asperiores placeat illum cumque, quas omnis quia eaque sunt unde accusamus ea nihil similique? Deleniti a accusamus
          exercitationem tempora esse nostrum. Laborum, similique optio. Consequuntur, ex! Esse, officiis ex temporibus mollitia, eos id vero ratione assumenda sed debitis beatae optio voluptatibus
          ducimus expedita, ipsam nam? <br />
          Ab minima aperiam magni mollitia qui? Molestiae animi repellendus accusantium voluptas repudiandae. Provident, esse culpa facilis molestias voluptate nisi incidunt nobis nulla velit aliquam
          iste vero sed fugit corporis rem itaque aliquid quo sunt cumque. Nisi! Earum neque minus cupiditate nesciunt quo quibusdam, at ad iusto ab molestias voluptas temporibus minima autem quasi
          aut, repudiandae voluptate velit officia commodi debitis perferendis. Exercitationem voluptatibus iusto ex sequi. Quisquam ipsam dolorum illo libero aspernatur animi ad voluptates odit,
          rerum temporibus alias officia consequatur explicabo, similique molestiae saepe nisi sapiente sed nemo cupiditate sit doloremque ut facere. Laboriosam, sed! <br /> Et amet expedita magnam
          enim provident quam eveniet, temporibus ipsam, sit error optio nulla eos ex incidunt aliquid doloremque fuga tempore. Eius, modi minima quis eveniet dolorum eligendi assumenda inventore.
          Dolore similique, doloremque aliquid consequuntur saepe repudiandae, excepturi, dolorum eaque quibusdam mollitia nostrum delectus! Tempore laborum quam dicta dolorum facilis saepe
          repellendus aspernatur reiciendis nostrum. Nesciunt fugiat doloremque praesentium totam. Quaerat ipsam optio eveniet recusandae soluta! Incidunt, fugiat. Sint aliquam obcaecati libero optio
          in illo ut voluptatum ab possimus officia, reiciendis molestiae velit repudiandae at, fugit laborum tenetur ex placeat?
        </Blog>
      </Content>
      <Menu>
        <SideBar />
      </Menu>
    </Container>
  );
};

export default BlogDetail;
