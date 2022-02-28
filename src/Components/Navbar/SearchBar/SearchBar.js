import React from "react";
import { SearchContainer, SearchInput } from "./SearchBarElements";

const SearchBar = () => {
    return(
        <SearchContainer>
            <SearchInput type='text' placeholder="Search for Monster, Item, etc..."/>
        </SearchContainer>
    )
}

export default SearchBar