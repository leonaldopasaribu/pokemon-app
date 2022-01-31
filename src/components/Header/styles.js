import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  background: yellow;
  box-shadow: 2px 1px 30px #00000029;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 20px;
  }
`;

export const PokemonLogo = styled.img`
  width: 150px;

  @media only screen and (max-width: 600px) {
    width: 120px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  font-family: Mulish;
  color: #000;
  border-bottom: 2px solid ${props => props.theme.color};
  padding-bottom: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
  }
`;
