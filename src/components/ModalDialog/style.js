import styled from 'styled-components';
import { TEXT_COLOR_SECONDARY } from '../../styles/GlobalStyles';
export const Background = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const ModalDialog = styled.div`
  z-index: 25;
  position: absolute;
  top: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 268px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  background-color: ${TEXT_COLOR_SECONDARY};
  div.container {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 220px;
    justify-content: center;
    align-items: center;
  }
  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    font-size: 45px;
    margin-bottom: 10px;
    color: #e36396;
    border-radius: 50%;
    border: 2px solid #e36396;
  }
  span.titleModal {
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #707070;
  }
  span.textModal {
    color: #8c8c8c;
    text-align: center;
    font-size: 10pt;
  }

  div.buttons {
    display: flex;
    flex: 1;
    width: 100%;
    height: 30px;
  }
  button:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
  button {
    flex: 1;
    border: none;
    background-color: white;
    font-size: 10pt;

    color: #707070;
  }
  button.actionOne {
    border-right: 1px solid #e5e5e5;
    border-bottom-left-radius: 7px;
  }
  button.actionTwo {
    font-weight: bold;
    border-bottom-right-radius: 7px;
  }
`;
