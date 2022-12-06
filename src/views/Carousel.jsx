import Glider from "react-glider";
import "glider-js/glider.min.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../useContext/Context";
import union from "../assets/Union.svg";
//styles
import { ButtonAddOrREMOVE } from "../components/ButtonAddOrREMOVE";
import { Cards } from "../components/Cards";
import { Img, H3, P, Button, ViewDetail,SpanHorizintal,Span  } from "../styled-components/Popular";


const Navink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #949a97;
  &:hover {
    color: #4a4a4a;
    font-weight: bold;
  }
`;


export default function () {
  const { products, onAdd } = UseCartContext();
  const populares = products.filter((product) => product.popular);
  
  
  return (
    <>
      <h2 style={{marginTop: "-34px"}} >Popular</h2>
        <Glider draggable hasArrows hasDots slidesToShow={6} slidesToScroll={6}>
          {populares.map((product) => (
            <Cards key={product.id} data-product-id={product.id}>
              <ViewDetail>
                <Navink to={`/detail?productID=${product.id}`}>
                  View detail
                </Navink>
              </ViewDetail>
              
              <Img src={product.image} alt={product.name} />
              <Span>
                <H3>{product.name}</H3>
                <P>{product.category}</P>
              </Span>
              <SpanHorizintal>
                <P>${product.price}</P>
                <ButtonAddOrREMOVE onClick={() => onAdd(product)}>
                  <img src={union} />
                </ButtonAddOrREMOVE>
              </SpanHorizintal>
            </Cards>
          ))}
        </Glider>
      
    </>
  );
}
