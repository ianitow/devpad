import React, { useEffect } from 'react';
import { Container } from './style.js';
import { tagThunks } from '../../store/thunks/tags';
import { useSelector, useDispatch } from 'react-redux';
import { noteThunks } from '../../store/thunks/notes';
import TagFilter from '../../components/TagFilter';
import CardList from '../../components/CardList';
import DialogAlert from '../../components/DialogAlert';
import Search from '../../components/Search/index';
import { Creators as EditorCreators } from '../../store/ducks/editor';

export const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    noteThunks.list(dispatch);
    dispatch(EditorCreators.CLEAR_ALL());
  }, []);

  const filtered = useSelector((state) => state.searchReducer.filtered);

  useEffect(() => {
    tagThunks.getAll(dispatch);
  }, []);

  return (
    <>
      <DialogAlert />
      <Container>
        <Search />
        <TagFilter />
        {filtered[0] ? <CardList cards={filtered}></CardList> : 'Nada aqui'}
      </Container>
    </>
  );
};

export default Home;
