import Glider from "react-glider";
import "glider-js/glider.min.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../useContext/Context";
import minus from "../assets/minus.svg";
import union from "../assets/Union.svg";
import { ButtonAddOrREMOVE } from "../components/ButtonAddOrREMOVE";
import { Cards } from "../components/Cards";






	


const Navink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #949a97;
  &:hover {
    color: #4a4a4a;
    font-weight: bold;
  }
`;

export const Img = styled.img`
  margin-top: 1px;
  width: 50%;
  border-radius: 30px;
  z-index: -1;
  /* border: 1px solid red; */
`;

export const H3 = styled.h3`
  margin: 1px 0;
`;
export const P = styled.p`
  text-align: center;
  margin: 7px 0;
  color: #4a4a4a;
  font-weight: 300;
  margin: 1px;
  font-weight: bold;
`;
export const Button = styled.button`
  border-radius: 22px;
  height: 36px;
  width: 36px;
  font-size: 24px;
  color: white;
  background-color: #1caf5e;
  border: none;
  z-index: 8000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #137740;
  }
`;

const ViewDetail = styled(P)`
  position: absolute;
  top: 0;
  right: 12px;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SpanHorizintal = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;

  margin-top: -8px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
`;

export default function () {
  const { products, onAdd } = UseCartContext();
  const [loading, setLoading] = useState(true);
  const populares = products.filter((product) => product.popular);
  console.log("imageeen", populares[0].image)
  
  return (
    <>
      <h2>Popular</h2>
      {/* LOADING */}
      {loading && (
        <Glider draggable hasArrows hasDots slidesToShow={2} slidesToScroll={1}>
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
      )}
    </>
  );
}
