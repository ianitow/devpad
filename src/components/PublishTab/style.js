import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;

  z-index: 15;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 10%;
  justify-content: space-between;
  background-color: white;
  height: 110px;
  border-top: 1px solid #ddd;
  font-weight: bold;
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border: 1px solid ${PRIMARY_COLOR};
  background-color: ${PRIMARY_COLOR};
  color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border: 2px solid #ddd;
  color: #ccc;
  border-radius: 10px;
  transition: color 200ms;
  :hover {
    cursor: pointer;
    color: #aaa;
  }
`;
