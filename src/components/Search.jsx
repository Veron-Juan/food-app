import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import { UseCartContext } from "../useContext/Context";

const Buscador = styled.form`
  width: 229px;
  height: 38px;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;

  padding-left: 10px;
  align-items: center;

  @media (min-width: 648px) {
    position: absolute;
    top: 15px;
  }
`;
const Input = styled.input`
  width: 150px;
  color: black;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  
  appearance: none;
border-style: none;
border-color: none;
-moz-appearance: none;
-webkit-appearance: none;


  
  
`;

export default function Search() {
  const { setWord } = UseCartContext();
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length < 2) {
      alert("no hay resultados");
    } else {
      e.currentTarget.keyword.value = "";
      history(`resultados?keyword=${keyword}`);
      setWord(keyword);
    }
  };
  return (
    <>
      <Buscador onSubmit={submitHandler}>
        <CiSearch style={{ fontSize: "21px" }} />
        <Input autocomplete="off" placeholder="Search..." name="keyword" />
      </Buscador>
    </>
  );
}
