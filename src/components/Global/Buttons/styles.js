import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0 auto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 10px;
  border: ${(props) => (props.disabled ? "2px solid #14fc33" : "#14fc33")};
  background: ${(props) => (props.disabled ? "#fff" : "#14fc33")};
  color: ${(props) => (props.disabled ? "#14fc33" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    height: auto;
    padding: 10px;
  }
`;
