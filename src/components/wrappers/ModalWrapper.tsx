import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { motion } from "framer-motion";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "480px",
    padding: "32px",
    background: "#060B27",
    border: "none",
    overflow: "initial",
    borderRadius: "8px",
  },
};

interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  visibility?: boolean;
  selector?: any;
  portalClassName?: string;
}

export const ModalWrapper = ({
  children,
  isOpen = false,
  onClose,
  selector,
}: ModalLayoutProps) => {
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={customStyles}
          contentLabel="Example Modal"
          shouldReturnFocusAfterClose={true}
          overlayClassName={"overlay"}
          shouldFocusAfterRender={true}
          parentSelector={() =>
            selector ? document.querySelector(selector) : document.body
          }
          ariaHideApp={false}
        >
          <Wrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </Wrapper>
        </Modal>
      )}
    </>
  );
};

const Wrapper = styled.div`
  user-select: none;
`;
