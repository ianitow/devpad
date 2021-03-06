import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  border: 2px solid ${(props) => props.color};
  background: ${(props) => (props.outlined ? 'transparent' : props.color)};
 
  color: ${(props) => (props.outlined ? props.color : 'white')};
  border-radius: 23px;
  padding: ${(props) => (props.dense ? '3.5px 10px' : '7px 12px')};
  width: auto;
  font-weight: bold;
  margin-right: 5px;
  height: ${(props) => (props.dense ? '23px' : '30px')};
  font-size: 10px;
  flex-grow: 0 !important;
  margin-bottom: 5px;
  transition: background 200ms ease;
  background:${(props)=>{
    if(props.selected){
      return  props.outlined ? props.color : 'white'
    }
  }};
  color:${(props)=>{
    if(props.selected){
      return  props.outlined ?  'white' : props.color
    }
  }};

  

  :hover {
    cursor: pointer;
    color: ${(props)=>{
    if(props.clickable){
      return props.outlined ? 'white' : props.color;
    }}};
    
    background:  ${(props)=>{
    if(props.clickable){
    return props.outlined ? props.color : 'white';
     }}};
  }
`;
