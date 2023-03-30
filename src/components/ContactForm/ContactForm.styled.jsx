import styled from 'styled-components';

export const Form = styled.form`
  width: 373px;
  padding: 8px;
  padding-bottom: 12px;
  border: 2px solid lightblue;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 5px;
  border-color: lightblue;
  padding: 5px;

  &:focus {
    border-color: white;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  width: 200px;
  padding: 10px;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #93b0c7;
  }
`;
