import styled from "styled-components"
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import bannerImage from "../assets/banner_img 1.png"

const Card = styled.div`
min-width: 320px;
max-width: 100vw;
max-height: 160px;
border-radius: 10px;
margin-right: 20px;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 160px;

`
const Title = styled.h2`
color:white;
font-size: 30px;
position: absolute;
top: 50px;
`

const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
position: relative;

`

const Container = styled.div`
max-width: 1200px;

margin: 0 auto;

`

export default function WelcomeCard(){

    

    return(
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
    <Image  src={bannerImage}/>
    <Title>Get 25% off on all fruits</Title>
  </Card>
  <Card>
    <Image src="https://images.pexels.com/photos/5965672/pexels-photo-5965672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Title>Get 25% off on all fruits</Title>
  </Card>
  <Card>
  <Image src="https://images.pexels.com/photos/5971864/pexels-photo-5971864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  <Title>Get 25% off on all fruits</Title>
  </Card>
</Glider>
</Container>    

  {/* <Card>
    <Image src="https://images.pexels.com/photos/1332275/pexels-photo-1332275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  </Card>
  <Card>
  <Image src="https://images.pexels.com/photos/3338542/pexels-photo-3338542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  </Card>
  <Card>
  <Image src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  </Card> */}
  

        </>
    )
}