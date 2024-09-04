import React from 'react';
import './Dialog.css'; // Para os estilos

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Não renderiza o diálogo se ele não estiver aberto

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="dialog-body">
          {children}
        </div>
        <div className="dialog-footer">
          <button onClick={onClose} className="dialog-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;