import React from 'react';
import { Container, SaveButton, CancelButton } from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import DialogAlert from '../DialogAlert';
import { toast } from 'react-toastify';
const PublishTab = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editorReducer);
  return (
    <>
      <DialogAlert></DialogAlert>

      <Container>
        <CancelButton
          onClick={() => {
            history.goBack();
          }}
        >
          Cancelar
        </CancelButton>
        <SaveButton

          onClick={() => {

            if (editorState.title.trim().length === 0) {
              toast.error('Título muito pequeno ou inválido.');
              return;
            }
            noteThunks.create(dispatch, editorState).then(() => {
              history.goBack();
            });

          
          }}
        >
          Salvar
        </SaveButton>
      </Container>
    </>
  );
};

export default PublishTab;
