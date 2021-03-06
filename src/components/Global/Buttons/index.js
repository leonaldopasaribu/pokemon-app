import React from "react";

import { Button } from "./styles";

export default function Buttons({ title, onClick, disabled }) {
  return (
    <Button
      onClick={!disabled ? onClick : () => {}}
      disabled={disabled}
      data-testid="button"
    >
      {title}
    </Button>
  );
}
