import styled from '@emotion/styled';
import { ButtonStyled } from 'components/button/Button.styled';

export const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  padding: 27px 10px 0px;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 355px;
  margin: 0 auto;
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled(ButtonStyled)`
  padding: 8px 38px;
  background-color: transparent;
  border: none;
`;
