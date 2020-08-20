import React from 'react';
import { TagSwitcher } from './style';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import DialogAlert, { options } from '../DialogAlert';
import ColorPicker from '../ColorPicker';
import Tag from '../Tag';

export default (props) => {
  const [availableTags, setAvailableTags] = React.useState([]);
  const [colorPicker, setColorPicker] = React.useState('#000');
  const [isColorPickerActive, setIsColorPickerActive] = React.useState(false);
  const [tagInput, setTagInput] = React.useState();
  function createNewTag(tagName) {
    let isExists = availableTags.some((value) => tagName === value.name);
    if (isExists) {
      return toast.error(`Já existe uma tag: ${tagName}`, options);
    }
    if (!tagName || tagName.trim() === '') {
      return toast.error(`Por favor, informe um nome válido.`, options);
    }

    availableTags.push({ name: tagName, color: colorPicker });
    setTagInput('');
    return toast.success('Tag criada com sucesso.');
  }

  return (
    <>
      <DialogAlert type="error" />
      <TagSwitcher>
        <div className="inputExternal">
          <div className="inputContainer">
            <input
              type="text"
              value={tagInput}
              placeholder="Criar tag"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  return createNewTag(tagInput);
                }
                setIsColorPickerActive(false);
              }}
              onChange={(event) => setTagInput(event.target.value)}
            ></input>
            <ColorPicker
              defaultColor={colorPicker}
              onColorSelected={(color) => setColorPicker(color)}
              isColorPickerActive={isColorPickerActive}
              setIsColorPickerActive={setIsColorPickerActive}
            />
          </div>
          <div className="iconContainer" onClick={() => createNewTag(tagInput)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        <div className="tagContainer">
          {availableTags &&
            availableTags.map(({ name, color }) => {
              return (
                <Tag key={name} name={name} color={color} outlined dense />
              );
            })}
        </div>
      </TagSwitcher>
    </>
  );
};
