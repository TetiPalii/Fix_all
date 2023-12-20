
import React from "react";
import { SearchButton, SearchForm, SearchInput } from "../searchCategory/SearchCategory.styled";

export const SearchCategory = ()=>{
    return <SearchForm action="">
        <SearchInput type="text" placeholder="What should be done?"/>
        <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
}