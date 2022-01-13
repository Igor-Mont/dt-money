import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";
import { createServer } from "miragejs";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement("#root");

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          amount: 300,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTranscationModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTranscationModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <GlobalStyle />
      <Modal
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTranscationModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}
