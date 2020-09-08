import React from 'react';
import TagList from '../TagList';
import { Card, ButtonsAside, DeleteButton, EditButton } from './style.js';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalDialog from '../ModalDialog';
import { noteThunks } from '../../store/thunks/notes';
import md5 from 'crypto-md5';
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({ id, title, tags }) => {
  const [hovered, setHovered] = React.useState(false);
  const [openedModal, setOpenedModal] = React.useState(false);
  const dispatch = useDispatch();
  const memorizedGradient = React.useMemo(() => {
    function returnNewGradient(string) {
      let colorOne = md5(title, 'hex').slice(0, 6);
      let colorTwo = md5(title, 'hex').slice(7, 13);

      return `linear-gradient(180deg, #${colorOne} 0%, #${colorTwo} 100%);`;
    }
    return returnNewGradient(title);
  }, [title]);

  function onClickDeleteCard() {
    noteThunks
      .remove(dispatch, id)
      .then(() => {
        toast.success('Card deletado com sucesso.');
      })
      .catch((err) => {
        toast.error('Houve um erro ao deletar o card ' + err.getMessage());
      });

    setOpenedModal(false);
  }
  function onClickEditCard() {}

  return (
    <>
      <ModalDialog
        message={`Deseja deletar o card: ${title}`}
        icon={faTrash}
        buttons={['OK', 'Cancelar']}
        title="Teste"
        condition={openedModal}
        onCancel={() => {
          setOpenedModal(false);
        }}
        onSubmit={() => onClickDeleteCard()}
      />
      <div
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        className="items"
        style={{ marginBottom: '0px' }}
      >
        <Card gradient={() => memorizedGradient}>
          <h2>{title}</h2>
          <div className="tags">
            <TagList tags={tags} dense />
          </div>
          <ButtonsAside style={{ opacity: hovered ? 1 : 0 }}>
            <DeleteButton onClick={() => setOpenedModal(true)}>
              <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
            <EditButton>
              <FontAwesomeIcon icon={faEdit} />
            </EditButton>
          </ButtonsAside>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};
