import { css } from "@emotion/css";

export const header = css`
  width: 100%;
  padding: 0 5%;
  background: yellow;
  box-shadow: 2px 1px 30px #00000029;

  &--navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    img {
      width: 150px;
    }
  }

  &--menu {
    display: flex;
    gap: 20px;

    li {
      font-size: 18px;
      font-weight: 600;
      font-family: Mulish;
      color: #000;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: 0.3s;
      }
    }
  }
`;
