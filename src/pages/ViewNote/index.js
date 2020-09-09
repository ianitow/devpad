import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title } from './style';
import * as Note from '../../services/notes';

//Editor Imports
import TagList from '../../components/TagList';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as EditorCreatos } from '../../store/ducks/editor';
// import Editor from '@stfy/react-editor.js';
import Editor from '../../components/Editor';
import PublishTab from '../../components/PublishTab';
function ViewNote() {
  const { path } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const editorState = useSelector((state) => state.editorReducer);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await Note.view(path);
      console.log('result', result);
      dispatch(EditorCreatos.SET_NOTE({ ...result }));

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container id="editorjs-container">
        <Title>{editorState.title}</Title>
        <TagList tags={editorState.tags} clickable />
        <Editor isLoading={isLoading} />
      </Container>
      <PublishTab isCreating={false} />
    </>
  );
}
export default ViewNote;
