import { forwardRef, MouseEvent, ReactNode, TransitionEvent } from "react";
import {
  ModalContent,
  ModalDialog,
  ModalOverlay,
  ScrollDisabler,
  StyledModal,
} from "./styles";

interface ModalViewProps {
  id?: string;
  fadeType: "in" | "out";
  transitionEnd: (e: TransitionEvent) => void;
  children?: ReactNode;
  handleClick: (e: MouseEvent) => void;
}

const BaseModalView = (props: ModalViewProps, ref: any) => {
  const { id, fadeType, transitionEnd, children, handleClick } = props;
  return (
    <>
      <StyledModal
        id={id}
        className={`fade-${fadeType}`}
        onTransitionEnd={transitionEnd}
      >
        <ModalDialog>
          <ModalContent>{children}</ModalContent>
        </ModalDialog>
        <ModalOverlay onMouseDown={handleClick} ref={ref} />
      </StyledModal>
      <ScrollDisabler />
    </>
  );
};

export const ModalView = forwardRef(BaseModalView);
