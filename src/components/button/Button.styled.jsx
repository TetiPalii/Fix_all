import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: ${props => (props.small ? '8px 38px' : '16px 31px')};
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  &:hover{
    border: 1px solid #5DD167;
    border-radius: 3px;
  }
`;
