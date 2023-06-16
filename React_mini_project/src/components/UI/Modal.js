import React from "react";
import styled from "styled-components";
import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <Header>
        <h2>{props.title}</h2>
      </Header>
      <Content>
        <p>{props.message}</p>
      </Content>
      <Actions>
        <Button onClick={props.onConfirm}>Okay</Button>
      </Actions>
    </Card>
  );
};

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
  & > h2 {
    margin: 0;
    color: white;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export default Modal;
