import * as Note from '../../services/notes';
import { Creators } from '../ducks/cards';
import { useHistory } from 'react-router-dom';

export const noteThunks = {
  list: async (dispatch) => {
    Note.list().then((notes) => {
      dispatch(Creators.setCards(notes));
    });
  },
  create: async (dispatch, data) => {
    const tags = data.tags.map(({ _id }) => _id);

    data.tags = [...tags];
    return await Note.create(data).then(() => {
      noteThunks.list(dispatch);
    });
  },
  update: async (dispatch, id, data) => {
    return await Note.update(id, data).then(() => {
      noteThunks.list(dispatch);
    });
  },
  remove: async (dispatch, id) => {
    return await Note.remove(id).then(() => {
      noteThunks.list(dispatch);
    });
  },
  show: async (dispatch, id) => {
    return await Note.show(id).then((note) => {
      console.log(note);
    });
  },
};
