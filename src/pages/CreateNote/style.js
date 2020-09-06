import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 50%;
  flex-direction: column;
  padding: 64px 0px;

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 415px) {
    width: 80%;
  }
  .ce-block__content {
    max-width: 100%;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin-right: 8px;
    font-weight: bold;
    font-size: 14px;
    color: #8d8e8e;
    text-transform: uppercase;
  }
`;

export const TitleInput = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
  width: auto;

  input {
    font-family: Roboto, sans-serif;
    font-size: 1.8rem;
    height: 70px;
    border-radius: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding-right: 5px;
    width: 100%;
    border: 0px;
    color: #444;
    overflow-y: hidden;
    resize: none;
  }
`;

export const ContainerURL = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    padding: 20px;
    width: 320px;
    height: 30px;
    background: #f4f4f4;
    border-radius: 30px;
    border: none;
  }
  button {
    width: 50px;
    height: 40px;
    background: #e36396;
    border: 2px solid #ffffff;
    border-radius: 42px;
    color: white;
    font-weight: bold;
  }
  button:hover {
    cursor: pointer;
  }
`;
export const ButtonTag = styled.div`
  display: flex;
  min-width: 145px;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 30px;
  justify-content: center;
  border: 1px solid #ccc;
  color: #ccc;
  :hover {
    cursor: pointer;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
  }

  span {
    font-size: 13px;
    margin-left: 8px;
    padding: 0 4px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
`;

export const AddTagContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  color: #e5e5e5;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
`;
