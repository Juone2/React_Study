import React from "react";
import styled from "styled-components";
import classes from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

function Modal({ title, message, onConfirm }) {
  return (
    <div>
      <BackDrop onClick={onConfirm} />
      <Card className={classes.modal}>
        <Header>
          <h2>{title}</h2>
        </Header>
        <Content>
          <p>{message}</p>
        </Content>
        <Actions>
          <Button onClick={onConfirm}>Okay</Button>
        </Actions>
      </Card>
    </div>
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

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export default Modal;
