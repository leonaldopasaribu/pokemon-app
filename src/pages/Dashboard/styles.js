import styled from "@emotion/styled";

export const WrapperDashboard = styled.div({
  background: "linear-gradient(yellow, #ffd61f)",
  height: "auto",
  minHeight: "auto",
});

export const Container = styled.div({
  padding: "0 5%",
  display: "flex",
  alignItems: "center",
});

export const Title = styled.p({
  fontSize: "56px;",
  fontFamily: "Mulish",
  fontWeight: "300",
});

export const TitleBold = styled.p({
  fontSize: "56px;",
  fontFamily: "Mulish",
  fontWeight: "600",
});

export const Description = styled.p({
  fontSize: "22px;",
  fontFamily: "Mulish",
  paddingTop: "20px",
});

export const Button = styled.button({
  marginTop: "20px",
  fontSize: "18px;",
  fontWeight: "600",
  border: "none",
  background: "#14fc33",
  color: "#fff",
  padding: "20px",
  boxShadow: "2px 1px 30px #00000029",
});
