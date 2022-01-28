import styled from "@emotion/styled";

export const WrapperDashboard = styled.div({
  background: "linear-gradient(yellow, #ffd61f)",
  height: "auto",
  minHeight: "auto",
});

export const Container = styled.div`
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const Title = styled.p`
  font-size: 56px;
  font-family:Mulish,
  font-weight: 300;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const TitleBold = styled.p`
  font-size: 56px;
  font-family: Mulish;
  font-weight: 600;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  font-family: Mulish;
  padding-top: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  background: #14fc33;
  color: #fff;
  padding: 20px;
  box-shadow: 2px 1px 30px #00000029;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 15px;
  }
`;

export const ImagePikachu = styled.img`
  @media only screen and (max-width: 600px) {
    width: 100px;
  }
`;

export const ImagePokeBall = styled.img`
  @media only screen and (max-width: 600px) {
    width: 40px;
  }
`;
