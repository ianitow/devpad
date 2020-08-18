import React from 'react';
import TagList from '../TagList';
import { Card, Fundo, Container } from './style.js';
export default ({ title, tags }) => {
  const colors = [
    '#e36396',
    '#F65757',
    '#F69A57',
    '#FFB800',
    '#99d23b',
    '#3BD29C',
    '#4AC9FF',
    '#2D66A9',
    '#9b30ff',
  ];

  function returnNewGradient() {
    let colorOne = colors[Math.floor(Math.random() * colors.length)];
    let colorTwo = colors[Math.floor(Math.random() * colors.length)];
    while (colorOne === colorTwo) {
      colorTwo = colors[Math.floor(Math.random() * colors.length)];
    }
    return `linear-gradient(180deg, ${colorOne} 0%, ${colorTwo} 100%);`;
  }
  return (
    <Card>
      <Fundo gradient={returnNewGradient} />
      <Container>
        <h2>{title}</h2>
        <TagList tags={tags} />
      </Container>
    </Card>
  );
};
