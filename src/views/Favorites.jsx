
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import {  Img, Span, P,  SpanHorizintal, H3, Button } from "./Carousel";
import { Cards } from '../components/Cards';

export default function(){




    return(
        <>
        <H3>Favorites</H3>
        <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={2}
      slidesToScroll={1}
      >
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
      <Cards>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLKaGcoSU9q1bzPw3VaWx83hG1c0qUU1O6g&usqp=CAU'/>
      <Span>
        <H3>Milanesa</H3>
        <P>descridsa asdjasdd n s sdd sdew </P>
      </Span>
      <SpanHorizintal>
        <P>$15</P>
        <Button>+</Button>

      </SpanHorizintal>
    </Cards>
  
    </Glider>
        </>
    )
}