import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const TagSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 280px;
  height: 150px;
  overflow-y: auto;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  div.inputExternal {
    position: fixed;
    display: flex;
    padding: 10px;
    width: 280px;
    z-index: 15;
    background-color: white;
  }
  div.inputContainer {
    display: flex;
    z-index: 5;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height: 40px;
    border-radius: 20px;
    width: 80%;
    padding: 0px 10px;
    outline: 0;
    margin-right: 5px;
    border: 0.5px solid #cccccc;
  }

  div.iconContainer {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 28px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    background-color: ${PRIMARY_COLOR};
    color: white;
    border: 3px solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.iconContainer:hover {
    cursor: pointer;
  }

  div.inputContainer input {
    width: 88%;
    height: 80%;
    border: 0;
  }
  div.tagContainer {
    position: relative;
    top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 15px;
    padding: 10px;
  }
`;
export const Close = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: white;
  /* border: 1px solid #f1f1f1; */
  position: absolute;
  top: 0px;

  left: 0;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: 'X';
    font-size: 8pt;
    font-weight: bold;
  }
`;
