import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "#222",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
  borderRadius: "8px",
  overflow: "auto",
  padding: "1rem",
  color: "white"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 999,
};

export default function Modal({ children, onClose }) {
  const cartRoot = document.getElementById("cart-root");
  if (!cartRoot) {
    console.warn("Modal container 'cart-root' not found in index.html.");
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button
          className="btn btn-danger fs-5"
          style={{ float: "right", marginBottom: "10px" }}
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </>,
    cartRoot
  );
}
