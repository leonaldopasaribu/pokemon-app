import React from "react";

import {
  ContainerLoader,
  Loaders,
  LoaderSpinner,
  LoaderSpinnerChild,
} from "./styles";

const Loader = () => {
  return (
    <ContainerLoader>
      <Loaders>
        <p>Loading...</p>
        <LoaderSpinner>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
          <LoaderSpinnerChild></LoaderSpinnerChild>
        </LoaderSpinner>
      </Loaders>
    </ContainerLoader>
  );
};

export default Loader;
