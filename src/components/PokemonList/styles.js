import styled from "@emotion/styled";

import font from "../../assets/fonts/BarcadeBrawl.ttf";

export const Card = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 1.5rem 0;
  margin: 2rem;
  border-radius: 1rem;
  min-width: 220px;
  height: 285px;
  text-align: center;
  background: rgba(0, 0, 0, 0)
    linear-gradient(rgb(168, 255, 152), rgb(214, 162, 228)) repeat scroll 0% 0%;
  box-shadow: 0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034), 0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049), 0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067), 0 71px 71px rgba(0, 0, 0, 0.09);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
export const CardNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const CardImage = styled.img`
  width: 120px;
  height: 120px;
`;

export const CardName = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: barcadebrawl;
  @font-face {
    font-family: barcadebrawl;
    src: url(${font}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
