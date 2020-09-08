import React from 'react';
import { ModalDialog, Background } from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({
  title,
  message,
  buttons,
  icon,
  onCancel,
  onSubmit,
  condition,
  ...props
}) => {
  return (
    <>
      {condition && (
        <>
          <Background />
          <ModalDialog>
            <div className="container">
              <div className="icon">
                <FontAwesomeIcon icon={icon} />
              </div>
              <span className="titleModal">{title}</span>
              <span className="textModal">{message}</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  onSubmit();
                }}
                className="actionOne"
              >
                {buttons[0]}
              </button>
              <button
                onClick={() => {
                  onCancel();
                }}
                className="actionTwo"
              >
                {buttons[1]}
              </button>
            </div>
          </ModalDialog>
        </>
      )}
    </>
  );
};
