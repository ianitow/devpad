import React, { useState } from 'react';
import Switch from 'react-switch';
import TagSwitcher from '../../components/TagSwitcher';
import PublishTab from '../../components/PublishTab';
import { Creators as EditorCreators } from '../../store/ducks/editor';

import {
  Container,
  Caption,
  TitleInput,
  ContainerURL,
  AddTagContainer,
  ButtonTag,
} from './style';

//Editor Imports

import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '../../components/Tag';
import Editor from '../../components/Editor';
import { tagThunks } from '../../store/thunks/tags';
function CreateNote({ add }) {
  const allValues = useSelector((state) => state.tagsReducer.tags);
  const editorState = useSelector((state) => state.editorReducer);

  const titleCard = editorState.title;
  const type = editorState.isRedirect;
  const inputURL = editorState.url;
  const tagsSelected = editorState.tags;
  const [isVisibleTag, setIsVisibleTag] = useState(false);
  const dispatch = useDispatch();
  //Efects
  React.useEffect(() => {
    tagThunks.getAll(dispatch);

    if (tagsSelected.length === 0) {
      allValues.map((item) => {
        item.selected = false;
        return item;
      });
    }
  }, []);

  //Handles
  function handleCancelClick() {
    console.log(editorState);
  }
  function handleSaveButton() {
    console.log(editorState);
  }
  function handleCloseButton() {
    return setIsVisibleTag(!isVisibleTag);
  }
  function handleTag(name, color, selected) {
    const o = allValues.map((item) => {
      if (item.name === name) {
        item.selected = !item.selected;
      }

      return item;
    });
    const all = o.filter((item) => (item.selected ? item : false));

    dispatch(EditorCreators.SET_NOTE({ ...editorState, tags: [...all] }));
  }

  async function handleTagCreated(payload) {
    tagThunks.addTag(dispatch, { ...payload }).then(() => {
      toast.success('Tag criada com sucesso.');
    });

    // console.log('No create note', allValues);
  }
  function validateUrl() {
    if (!type) {
      return /^[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?/.test(
        inputURL,
      );
    }
  }

  function submitNote() {
    if (!type) {
      if (validateUrl(inputURL)) {
        console.log(editorState);
      } else {
        toast.error('Você informou uma url inválida.');
      }
    }
  }

  return (
    <>
      <ToastContainer />

      <Container>
        <Caption>
          <h2>Nova Anotação</h2>{' '}
          <Switch
            onChange={() =>
              dispatch(
                EditorCreators.SET_NOTE({
                  ...editorState,
                  isRedirect: !editorState.isRedirect,
                }),
              )
            }
            checked={!type}
            checkedIcon={false}
            uncheckedIcon={false}
            height={18}
            width={30}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                return false;
              }
            }}
            handleDiameter={10}
            offColor="#CCC"
            onColor="#86d3ff"
          />
        </Caption>

        <TitleInput>
          <input
            type="text"
            value={titleCard}
            onChange={({ target }) =>
              dispatch(
                EditorCreators.SET_NOTE({
                  ...editorState,
                  title: target.value,
                }),
              )
            }
            placeholder={
              type
                ? 'Enter the name of your redirect'
                : 'Enter the name of your note...'
            }
            maxLength="70"
          />
        </TitleInput>

        <AddTagContainer>
          {tagsSelected &&
            tagsSelected.map((item) => {
              return <Tag {...item} outlined={true} />;
            })}
          <ButtonTag onClick={() => setIsVisibleTag(!isVisibleTag)}>
            <p>Adicionar Tag</p> <span>+</span>
          </ButtonTag>
          <div className="tag">
            {isVisibleTag && (
              <TagSwitcher
                onTagCreated={handleTagCreated}
                onTagIsClicked={handleTag}
                tagsAlreadySelected={allValues}
                onCloseButton={handleCloseButton}
              />
            )}
          </div>
        </AddTagContainer>

        {type ? (
          <>
            {!isVisibleTag && (
              <ContainerURL>
                <input
                  type="text"
                  value={inputURL}
                  onChange={({ target }) =>
                    dispatch(
                      EditorCreators.SET_NOTE({
                        ...editorState,
                        url: target.value,
                      }),
                    )
                  }
                  placeholder="Enter a url..."
                />
                <button type="submit" onClick={submitNote}>
                  OK
                </button>
              </ContainerURL>
            )}
          </>
        ) : (
          <>{!isVisibleTag && <Editor />}</>
        )}
      </Container>
      <PublishTab />
    </>
  );
}
export default CreateNote;
