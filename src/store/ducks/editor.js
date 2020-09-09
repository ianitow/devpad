export const Types = {
  CLEAR_ALL: 'editor/CLEAR_ALL',
  SET_NOTE: 'editor/SET_NOTE',
};

const INITIAL_STATE = {
  title: '',
  tags: [],
  isRedirect: false,
  url: null,
  content: {},
};

export default function editor(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CLEAR_ALL:
      return { ...INITIAL_STATE };
    case Types.SET_NOTE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const Creators = {
  CLEAR_ALL: () => {
    return {
      type: Types.CLEAR_ALL,
    };
  },

  SET_NOTE: ({ _id, title, tags, isRedirect, url, content }) => {
    return {
      type: Types.SET_NOTE,
      payload: { title, tags, isRedirect, url, content, _id },
    };
  },
};
