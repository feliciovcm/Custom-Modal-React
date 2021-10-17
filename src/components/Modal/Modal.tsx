import {
  MouseEvent,
  ReactNode,
  TransitionEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDom from "react-dom";
import { ModalView } from "./ModalView";

const modalRoot: any = document.getElementById("modal-root");

type Fade = "in" | "out";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  children?: ReactNode;
}

function Modal(props: ModalProps) {
  const { isOpen, onClose, id, children } = props;
  const [fadeType, setFadeType] = useState<Fade>("in");

  const background = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false);
    return () => window.removeEventListener("keydown", onEscKeyDown, false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setFadeType("out");
    }
    if (isOpen) {
      setFadeType("in");
    }
  }, [isOpen]);

  const transitionEnd = (e: TransitionEvent) => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;

    if (fadeType === "out") {
      onClose();
    }
  };

  const onEscKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setFadeType("out");
    }
    return;
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setFadeType("out");
  };

  if (isOpen)
    return ReactDom.createPortal(
      <ModalView
        id={id}
        fadeType={fadeType}
        transitionEnd={transitionEnd}
        handleClick={handleClick}
        ref={background}
      >
        {children}
      </ModalView>,
      modalRoot
    );
  return null;
}

export default Modal;
