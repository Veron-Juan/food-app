import styled from "styled-components";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import bannerImage from "../assets/banner_img 1.png";

const Card = styled.div`
  min-width: 320px;
  max-width: 100vw;
  max-height: 160px;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 130px;
  @media (min-width: 648px) {
    margin-top: 105px;
  }
`;
const Title = styled.h2`
  color: white;
  font-size: 18px;
  position: absolute;
  top: 180px;
  @media (min-width: 648px) {
    font-size: 26px;
    margin-top: -5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;

  margin: 0 auto;
`;

export default function WelcomeCard() {
  return (
    <>
      <Container>
        <Glider
          className="glider-container"
          draggable
          hasDots
          slidesToShow={1}
          scrollLock
        >
          <Card>
            <Image src="https://images.theconversation.com/files/417973/original/file-20210826-2243-15s35b8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop" />
            <Title>Get 25% off on all products</Title>
          </Card>
          <Card>
            <Image src="https://images.pexels.com/photos/5965672/pexels-photo-5965672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Title>Get 25% off on all products</Title>
          </Card>
          <Card>
            <Image src="https://images.pexels.com/photos/5971864/pexels-photo-5971864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Title>Get 25% off on all products</Title>
          </Card>
        </Glider>
      </Container>
    </>
  );
}
