// import React, { useState } from "react";
import React from "react";
import "./App.css";
import Modal from "./components/Modal";

// function App() {
//   const [modalOpen, setModalOpen] = useState(false);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ModalOpen: false
    };
  }
  handleOpen = () => {
    this.setState({ ModalOpen: true });
  };
  handleClose = () => {
    this.setState({ ModalOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>Hey, click on the button to open the modal.</h1>
        <button className="openModalBtn" onClick={this.handleOpen}>
          Open
        </button>

        {this.state.ModalOpen && <Modal setOpenModal={this.handleClose} />}
      </div>
    );
  }
}

export default App;
