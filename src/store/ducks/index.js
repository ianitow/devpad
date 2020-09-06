import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from './cards';
import tagsReducer from './tags';
import searchReducer from './search';

import editorReducer from './editor';

export default combineReducers(
  {
    notesReducer,
    tagsReducer,
    searchReducer,
    editorReducer,
  },
  applyMiddleware(thunk),
);
