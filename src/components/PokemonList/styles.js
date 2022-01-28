import styled from "@emotion/styled";

export const Container = styled.section`
  position: relative;
`;

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: Mulish;
  text-align: center;
`;
