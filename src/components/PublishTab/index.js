import React from 'react';
import { Container, SaveButton, CancelButton } from './style';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import DialogAlert from '../DialogAlert';
import { toast } from 'react-toastify';
import { DeleteButton } from './style';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalDialog from '../ModalDialog';
const PublishTab = ({ isCreating }) => {
  const history = useHistory();
  const { path } = useParams();
  const dispatch = useDispatch();
  const [openedModal, setOpenedModal] = React.useState(false);
  const editorState = useSelector((state) => state.editorReducer);
  function onClickDeleteCard() {
    noteThunks
      .remove(dispatch, editorState._id)
      .then(() => {
        toast.success('Card deletado com sucesso.');
      })
      .catch((err) => {
        toast.error('Houve um erro ao deletar o card ' + err.getMessage());
      });
    history.goBack();
    setOpenedModal(false);
  }

  return (
    <>
      <DialogAlert></DialogAlert>
      <ModalDialog
        message={`Deseja deletar o card: ${editorState.title}`}
        icon={faTrash}
        buttons={['OK', 'Cancelar']}
        title={'Confirmar exclusão ?'}
        condition={openedModal}
        onCancel={() => {
          setOpenedModal(false);
        }}
        onSubmit={() => {
          onClickDeleteCard();
        }}
      />
      <Container>
        <div className="leftSide">
          <CancelButton
            onClick={() => {
              history.goBack();
            }}
          >
            Cancelar
          </CancelButton>
          {!isCreating && (
            <DeleteButton
              onClick={() => {
                setOpenedModal(true);
              }}
            >
              Deletar
            </DeleteButton>
          )}
        </div>

        <SaveButton
          onClick={() => {
            if (editorState.title.trim().length === 0) {
              toast.error('Título muito pequeno ou inválido.');
              return;
            }
            if (isCreating) {
              noteThunks.create(dispatch, editorState).then(() => {
                history.goBack();
              });
            }
          }}
        >
          Salvar
        </SaveButton>
        <></>
      </Container>
    </>
  );
};

export default PublishTab;
