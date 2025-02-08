"use client";

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "./_hooks/OutsideClick";

const ModalContext = createContext();

function Overlay({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-[1000] transition-all duration-1000 backdrop-blur-sm bg-black/30">
      {children}
    </div>
  );
}

function StyledDiv({ children }) {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg shadow-lg px-16 py-12 transition-all duration-500">
      {children}
    </div>
  );
}

function StyledButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-none p-[0.4rem] rounded-sm translate-x-3 transition-all absolute top-[1.2rem] right-[1.9rem] hover:bg-gray-100 "
    >
      {children}
    </button>
  );
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledDiv ref={ref}>
        <StyledButton onClick={close}>
          <HiXMark />
        </StyledButton>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledDiv>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
