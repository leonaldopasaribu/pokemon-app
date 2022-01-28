import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "30px 5%",
});

export const Details = styled.div({
  width: "450px",
  paddingBottom: "20px",
});

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
  color: #14fc33;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-family: Mulish;
  font-size: 18px;
  font-weight: 300;
  padding-top: 10px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    width: 300px;
  }
`;

export const Pagination = styled.div({
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
});
