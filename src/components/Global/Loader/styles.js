import styled from '@emotion/styled';

export const ContainerLoader = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Loaders = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > p {
    font-weight: bold;
    font-size: 16px;
    font-family: Mulish;
    text-align: center;
    line-height: 21px;
  }
`;

export const LoaderSpinner = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  margin-top: 30px;
`;

export const LoaderSpinnerChild = styled.div`
  transform-origin: 40px 40px;
  animation: lds-spinner 0.8s linear infinite;

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 16px;
    left: 37px;
    width: 5px;
    height: 14px;
    border-radius: 30%;
    background: #000;
  }

  &:nth-of-type(1) {
    transform: rotate(0deg);
    animation-delay: -0.8s;
  }

  &:nth-of-type(2) {
    transform: rotate(45deg);
    animation-delay: -0.7s;
  }

  &:nth-of-type(3) {
    transform: rotate(90deg);
    animation-delay: -0.6s;
  }

  &:nth-of-type(4) {
    transform: rotate(135deg);
    animation-delay: -0.5s;
  }

  &:nth-of-type(5) {
    transform: rotate(180deg);
    animation-delay: -0.4s;
  }

  &:nth-of-type(6) {
    transform: rotate(225deg);
    animation-delay: -0.3s;
  }

  &:nth-of-type(7) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  &:nth-of-type(8) {
    transform: rotate(315deg);
    animation-delay: -0.1s;
  }

  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
