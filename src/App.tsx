import { useState } from "react";
import { EditSpeedmeterModal } from "./components/EditSpeedmeterModal/EditSpeedmeterModal";
import { FastActionsModal } from "./components/FastActionsModal/FastActionsModal";
import "./global.css";

function App() {
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  function setActionClose() {
    setIsActionModalOpen(false);
  }
  function setEditClose() {
    setIsEditModalOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsActionModalOpen(true)}>Open Modal</button>
      <FastActionsModal
        isOpen={isActionModalOpen}
        setClose={setActionClose}
        action={{ openEdit: setIsEditModalOpen }}
      />
      <EditSpeedmeterModal isOpen={isEditModalOpen} setClose={setEditClose} />
      <div style={{ height: "2000px" }}> hello</div>
    </div>
  );
}

export default App;
