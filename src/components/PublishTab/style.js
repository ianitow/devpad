import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 15;
  bottom: 0px;
  width: 100%;
  padding: 0 10%;
  justify-content: space-between;
  background-color: white;
  height: 80px;
  border-top: 1px solid #ddd;
  font-weight: bold;
  .leftSide {
    display: flex;
    width: auto;
  }
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: 1px solid ${PRIMARY_COLOR};
  background-color: ${PRIMARY_COLOR};
  color: white;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: 2px solid #ddd;
  color: #ccc;
  border-radius: 4px;
  transition: color 200ms;
  :hover {
    cursor: pointer;
    color: #aaa;
  }
`;
export const DeleteButton = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: 2px solid rgba(255, 0, 0, 0.5);
  color: rgba(255, 0, 0, 0.5);
  border-radius: 4px;
  transition: all 200ms;
  :hover {
    cursor: pointer;
    color: white;
    background-color: rgb(255, 0, 0);
  }
`;
