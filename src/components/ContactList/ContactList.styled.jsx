import styled from 'styled-components';

export const List = styled.li`
  font-size: 18px;
  margin: 10px;
`;
export const Button = styled.button`
  &:hover,
  &:focus {
    background-color: #2196f3;
    color: white;
    cursor: pointer;
  }

  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  text-align: center;
  border: solid 1px black;
  background-color: white;

  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
