import styled from "styled-components"
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Card = styled.div`
min-width: 310px;
max-width: 712px !important;
max-height: 400px;
min-height: 311px;
border-radius: 30px;
margin-right: 20px;
display: flex;
justify-content: space-evenly;
align-items: center;

`
const Title = styled.h2`
color:black;
font-size: 37px;
position: absolute;
top: 64px;
`

const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 80px;
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
    <Image  src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Title>20% off on your first purchase.</Title>
  </Card>
  <Card>
    <Image src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  </Card>
  <Card>
  <Image src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
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