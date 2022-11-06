import styled from 'styled-components';

export const Form = styled.form`
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;

export const Label = styled.label`
  display: flex;
  margin: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  display: flex;
  margin: 10px;
  padding-left: 16px;
  width: 200px;
  height: 30px;
  font-size: 18px;
  border-radius: 4px;
`;
export const Button = styled.button`
  &:hover,
  &:focus {
    background-color: #2196f3;
    color: white;
    cursor: pointer;
  }

  border-radius: 4px;
  padding: 5px;
  font-weight: 500;
  font-size: 18px;
  margin: 15px;
  text-align: center;
  border: solid 1px black;
  background-color: white;

  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
