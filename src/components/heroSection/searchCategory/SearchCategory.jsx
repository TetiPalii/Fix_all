import React from 'react';
import {
  Label,
  SearchButton,
  SearchForm,
  SearchInput,
} from '../searchCategory/SearchCategory.styled';

export const SearchCategory = () => {
  return (
    <SearchForm action="">
      <Label htmlFor="">
        <SearchInput type="text" placeholder="What should be done?" />
      </Label>
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
