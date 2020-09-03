import { getAll, addTag } from '../../services/tags';
import { Creators } from '../ducks/tags';

export const tagThunks = {
  getAll: (dispatch) => {
    dispatch(Creators.setLoading(true));
    getAll().then((tags) => {
      dispatch(Creators.getAll(tags));
      dispatch(Creators.setLoading(false));
    });
  },
  addTag: (dispatch, payload) => {
    addTag({ ...payload }).then((response) => {
      const { name, color, _id } = response.data;

      console.log('id no thunks', response.data);
      dispatch(Creators.add({ _id, name, color }));
    });
  },
};
