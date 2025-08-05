/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export const useModal = () => useContext(ModalContext);
export default useModal;

export const ModalProvider = ({ children }) => {
  const [content, setContent] = useState('');

  function open(content) {
    setContent(content);
  }

  function close() {
    setContent('');
  }

  return <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      { content && <div
        className="modal-background"
      >
        <div
          className="modal-body"
        >
          <div
            className="modal-content"
          >
            {content}
          </div>
          <div
            className="modal-foot"
          >
            <button
              onClick={() => setContent('')}
            >
              Cerrar
            </button>
          </div> 
        </div>
      </div>}
      { children }
    </ModalContext.Provider>;
}
