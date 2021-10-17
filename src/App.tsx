import { useState } from "react";
import { TestModal } from "./components/TestModal";
import "./global.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function setClose() {
    setIsModalOpen(false);
  }
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <div>Modal is: {isModalOpen ? "Open" : "Closed"}</div>
      <TestModal isOpen={isModalOpen} setClose={setClose} />
      <div style={{ height: "2000px" }}> hello</div>
    </div>
  );
}

export default App;
