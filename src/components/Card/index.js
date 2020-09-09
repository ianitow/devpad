import React from 'react';
import TagList from '../TagList';
import { Card, ButtonsAside, DeleteButton } from './style.js';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalDialog from '../ModalDialog';
import { noteThunks } from '../../store/thunks/notes';
import md5 from 'crypto-md5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default ({ id, title, tags, path }) => {
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

  return (
    <>
      <ModalDialog
        message={`Deseja deletar o card: ${title}`}
        icon={faTrash}
        buttons={['OK', 'Cancelar']}
        title="Confirmar exclusão ?"
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
          <Link style={{ textDecoration: 'none' }} to={'/view/' + path}>
            <h2>{title}</h2>
            <div className="tags">
              <TagList tags={tags} dense />
            </div>
          </Link>

          <ButtonsAside style={{ opacity: hovered ? 1 : 0 }}>
            <DeleteButton onClick={() => setOpenedModal(true)}>
              <FontAwesomeIcon icon={faTrash} />
            </DeleteButton>
          </ButtonsAside>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};
