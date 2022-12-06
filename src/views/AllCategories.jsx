import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import { ContainerDetail } from "./Detail";
import { ButtonBack } from "./Detail";
import { TitleDetail } from "./Detail";
import { UseCartContext } from "../useContext/Context";
import { Link } from "react-router-dom";
import {ContainerTop,ImgProduct, ContainerText,TitleCategories, ItemsCategories  } from "../styled-components/AllCategories"

const ContainerCategories = styled(ContainerDetail)`
  margin-top: 130px;
  @media (min-width: 656px) {
    margin-top: 100px;
  }
`;
const LinkBox = styled(Link)`
  width: 80%;
  height: 110px;
  margin: 20px auto;
  border: 1px solid #e8ecf2;
  border-radius: 14px;
  text-decoration: none;
  color: black;
  /* box-shadow: inset 0px 0px 3px black; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
  }
`;
const Back = styled(ButtonBack)`
  position: absolute;
  top: 12px;
  left: -20px;
`;



export default function AllCateogories() {
  const back = () => {
    window.history.back();
  };

  const { categories } = UseCartContext();

  return (
    <>
      <ContainerCategories>
        <ContainerTop>
          <Back onClick={back}>
            <MdArrowBackIosNew />
          </Back>
          <TitleDetail>Categories</TitleDetail>
        </ContainerTop>
        {categories.map((category) => (
          <LinkBox
            key={category.id}
            to={`/products?productID=${category.name}`}
            data-product-id={category.name}
          >
            <ImgProduct src={category.image} />
            <ContainerText>
              <TitleCategories>{category.name}</TitleCategories>
              <ItemsCategories>8 items</ItemsCategories>
            </ContainerText>
          </LinkBox>
        ))}
      </ContainerCategories>
    </>
  );
}
