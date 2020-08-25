import React, { useState } from 'react';
import Switch from 'react-switch';
import {
  Container,
  Caption,
  TitleInput,
  ContainerURL,
  AddTagContainer,
  ButtonTag,
} from './style';

import DialogAlert, { options } from '../../components/DialogAlert';
import TagSwitcher from '../../components/TagSwitcher';
import Dante from 'Dante2';
import { toast } from 'react-toastify';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Creators as CardsActions } from '../../store/ducks/cards'

import Tag from '../../components/Tag';

function CreateNote({add}) {
  const [type, setType] = useState(false);
  const [inputURL, setInputURL] = useState('');
  const [titleCard, setTitleCard] = useState('');
  const [tagsSelected, setTagsSelected] = useState([]);
  const [isVisibleTag, setIsVisibleTag] = useState(false);

  function handleTag(name, color, selected) {
    if (tagsSelected.filter((item) => item.name === name).length > 0) {
      let copy = [...tagsSelected];
      let newArray = copy.filter((item) => item.name !== name);
      return setTagsSelected(newArray);
    }

    let oldValues = [...tagsSelected];
    oldValues.push({ name, color, selected });
    setTagsSelected(oldValues);
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
          onChange={({target})=>setTitleCard(target.value)}
            placeholder={
              type
                ? 'Enter the name of your redirect'
                : 'Enter the name of your note...'
            }
            maxlength="150"
          />
        </TitleInput>

        <AddTagContainer>
          {tagsSelected &&
            tagsSelected.map((item) => {
              return <Tag {...item} />;
            })}
          <ButtonTag onClick={() => setIsVisibleTag(!isVisibleTag)}>
            <p>Adicionar Tag</p> <span>+</span>
          </ButtonTag>
          <div className="tag">
            {isVisibleTag && <TagSwitcher onTagIsClicked={handleTag} />}
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
          <>
            <Dante
              data_storage={{
                save_handler: (context, content) => {
                  console.log(content);
                },
              }}
            ></Dante>
          </>
        )}
      </Container>
    </>
  );
}
const mapDispatchToProps = dispatch=>{
  bindActionCreators(CardsActions,dispatch)
}
export default connect(null,mapDispatchToProps)(CreateNote)
