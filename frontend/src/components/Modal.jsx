/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

export const useModal = () => useContext(ModalContext);
export default useModal;

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ title: '', content: '' });

  function open(content, title = '', options) {
    setModal({ content, title, ...options });
  }

  function close() {
    setModal({ content: '', title: '' });
  }

  return <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      { modal.content && (
        <div className="modal-background" style={{backdropFilter: 'blur(6px)'}}>
          <div className="modal-body animate-modal" style={{position: 'relative'}}>
            <button className="modal-close" onClick={close} title="Cerrar modal">×</button>
            {modal.title && (
              <div className="modal-head">
                <span className="modal-title">{modal.title}</span>
              </div>
            )}
            <div className="modal-content animate-content">
              {modal.content}
            </div>
            <div className="modal-foot">
              {modal.onYes && <button onClick={modal.onYes}>Aceptar</button>}
              <button onClick={close}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
      { children }
    </ModalContext.Provider>;
}
