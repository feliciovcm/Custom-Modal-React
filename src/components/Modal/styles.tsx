import styled, { createGlobalStyle } from "styled-components";

const ModalDialog = styled.div`
  z-index: 1050;
  width: 100%;
  background-color: #fefefe;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const ModalContent = styled.div`
  padding: 0.5rem;
  width: 100%;
`;

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
`;

const StyledModal: any = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: fit-content;
  margin: auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
`;

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

export { StyledModal, ModalOverlay, ModalContent, ModalDialog, ScrollDisabler };
