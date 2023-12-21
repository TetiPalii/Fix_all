import styled from '@emotion/styled';
import { ButtonStyled } from 'components/button/Button.styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-shrink: 0; */
  height: 40px;
  width: 100%;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 255px;
  height: 100%;
  
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px 0px 0px 3px;
  border: none;
  background-color: #fff;
  padding-left: 31px;
`;

export const SearchButton = styled(ButtonStyled)`
  background-color: var(--accent-color-green);
  border: none;
  border-radius: 0px 3px 3px 0px;
  padding: 14px 43px 13px 31px;
  width: 110px;
  height: 100%;
  /* margin-left: -105px; */
`;
