import styled from '@emotion/styled';

export const List = styled.ul`
padding: 0;

  list-style: none;
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: 450;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
