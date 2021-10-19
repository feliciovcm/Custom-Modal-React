import { MouseEvent } from "react";
import { Modal } from "../Modal/Modal";
import {
  FastActionsBody,
  FastActionsContent,
  FastActionsDivider,
  FastActionsHeader,
} from "./styles";

function FastActionsModal(props: any) {
  const { isOpen, setClose, action } = props;
  
  function handleClick(type: string) {
    setClose();

    const actions: any = {
      edit: () => {
        setTimeout(() => {
          action.openEdit(true);
        }, 500);
      },
      default: () => null,
    };

    return (actions[type] || actions.default)();
  }

  

  return (
    <Modal id="fastActions" isOpen={isOpen} onClose={setClose}>
      <FastActionsContent>
        <FastActionsHeader>Ações rápidas</FastActionsHeader>
        <FastActionsDivider />
        <FastActionsBody>
          <ul>
            <li>
              <button type="button">Visualizar veículo</button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e: MouseEvent) => handleClick("edit")}
              >
                Editar odômetro
              </button>
            </li>
            <li>
              <button type="button">Adicionar manutenção</button>
            </li>
            <li>
              <button type="button">Adicionar abastecimento</button>
            </li>
          </ul>
        </FastActionsBody>
      </FastActionsContent>
    </Modal>
  );
}

export { FastActionsModal };
