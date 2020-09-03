import React, { useState } from 'react';
import Switch from 'react-switch';
import DialogAlert, { options } from '../../components/DialogAlert';
import TagSwitcher from '../../components/TagSwitcher';

import {
  Container,
  Caption,
  TitleInput,
  ContainerURL,
  AddTagContainer,
  ButtonTag,
} from './style';

//Editor Imports

import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as CardsActions } from '../../store/ducks/cards';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '../../components/Tag';
import tags, { Creators as TagActions } from '../../store/ducks/tags';
import Editor from '../../components/Editor';
import { tagThunks } from '../../store/thunks/tags';
function CreateNote({ add }) {
  const [type, setType] = useState(false);
  const allValues = useSelector((state) => state.tagsReducer.tags);
  const [inputURL, setInputURL] = useState('');
  const [titleCard, setTitleCard] = useState('');
  const [tagsSelected, setTagsSelected] = useState([]);
  const [isVisibleTag, setIsVisibleTag] = useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    tagThunks.getAll(dispatch);
    if (tagsSelected.length === 0) {
      allValues.map((item) => {
        item.selected = false;
        return item;
      });
    }
  }, []);

  function handleTag(name, color, selected) {
    const o = allValues.map((item) => {
      if (item.name === name) {
        item.selected = !item.selected;
      }

      return item;
    });
    const all = o.filter((item) => (item.selected ? item : false));

    setTagsSelected([...all]);
  }

  async function handleTagCreated(payload) {
    await tagThunks.addTag(dispatch, { ...payload });

    console.log('No create note', allValues);
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
      } else {
        toast.error('Você informou uma url inválida.', options);
      }
    }
  }

  function handleCloseButton() {
    return setIsVisibleTag(!isVisibleTag);
  }
  return (
    <>
      <DialogAlert />
      <Container>
        <Caption>
          <h2>Nova Anotação</h2>{' '}
          <Switch
            onChange={() => setType(!type)}
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
            value={titleCard}
            onChange={({ target }) => setTitleCard(target.value)}
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
                  onChange={({ target }) => setInputURL(target.value)}
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
    </>
  );
}
export default CreateNote;
