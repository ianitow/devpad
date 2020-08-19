import React from 'react';
import { TagList } from './style';
import Tag from '../Tag/index';

export default ({ tags }) => {
  return (
    <TagList>
      {tags &&
        tags.map(({ name, color, dense, outlined }, index) => {
          return (
            <Tag
              key={index}
              color={color}
              name={name}
              dense={dense}
              outlined={outlined}
            />
          );
        })}
    </TagList>
  );
};