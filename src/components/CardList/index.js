import React from 'react';
import { CardList } from './style';
import Card from '../Card/index';

export default ({ cards }) => {
  return (
    <CardList>
      {cards &&
        cards.map(({ _id, title, tags }, index) => {
          return <Card key={_id} id={_id} title={title} tags={tags} />;
        })}
    </CardList>
  );
};
