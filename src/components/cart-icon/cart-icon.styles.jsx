import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
  body::-webkit-scrollbar {
    width: 12px; /* ширина scrollbar */
  }
  body::-webkit-scrollbar-track {
    background: orange; /* цвет дорожки */
  }
  body::-webkit-scrollbar-thumb {
    background-color: blue; /* цвет плашки */
    border-radius: 20px; /* закругления плашки */
    border: 3px solid orange; /* padding вокруг плашки */
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
