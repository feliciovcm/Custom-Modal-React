import Modal from "../Modal/Modal";

function TestModal(props: any) {
  const { isOpen, setClose } = props;
  return (
    <Modal id="teste" isOpen={isOpen} onClose={setClose}>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello world</h1>
      <h1>hello worlffffffffffffffffffffffffffffffffffffffffffffffffffd</h1>
    </Modal>
  );
}

export { TestModal };
