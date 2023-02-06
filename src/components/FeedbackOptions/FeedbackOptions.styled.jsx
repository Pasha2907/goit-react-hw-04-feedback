import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 350;
  padding: 10px;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  background-color: white;

  :active {
    background-color: #0000ff;
  }
`;
