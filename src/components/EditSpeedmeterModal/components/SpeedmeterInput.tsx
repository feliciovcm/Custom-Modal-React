import { HTMLProps } from "react";
import {
  InputContainer,
  InputTextContainer,
  InputUnitContainer,
  StyledInput,
} from "../styles";

interface StyledInputProps extends HTMLProps<HTMLInputElement> {}

function SpeedmeterInput(props: StyledInputProps) {
  return (
    <InputContainer>
      <InputTextContainer>
        <StyledInput {...props} />
      </InputTextContainer>
      <InputUnitContainer>Km</InputUnitContainer>
    </InputContainer>
  );
}

export { SpeedmeterInput };
