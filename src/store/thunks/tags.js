import { getAll, addTag } from '../../services/tags';
import { Creators } from '../ducks/tags';

export const tagThunks = {
  getAll: async (dispatch) => {
    dispatch(Creators.setLoading(true));
    await getAll().then((tags) => {
      dispatch(Creators.getAll(tags));
      dispatch(Creators.setLoading(false));
    });
  },
  addTag: async (dispatch, payload) => {
    dispatch(Creators.setLoading(true));
    await addTag({ ...payload }).then((response) => {
      const { name, color, _id } = response.data;
      dispatch(Creators.setLoading(false));
      dispatch(Creators.add({ _id, name, color }));
    });
  },
};
