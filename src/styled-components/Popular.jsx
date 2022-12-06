import styled from "styled-components";


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
export const ViewDetail = styled(P)`
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