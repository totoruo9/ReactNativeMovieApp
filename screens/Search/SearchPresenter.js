import React from "react";
import styled from "styled-components/native";
import List from "../../components/List";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
    background-color: #333;
    width: 100%;
`;

const Text = styled.Text``;

const SearchPresenter = ({keyword, onChange, onSubmit, movies, shows}) => {
    return(
        <ScrollContainer loading={false} refrashFn={onSubmit}>
            <Input
                placeholder={"Write a keyword"}
                value={keyword}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            {
                movies.length !== 0
                &&<List title={"Movie results"} children={movies} />
            }
            {
                shows.length !== 0
                &&<List title={"TV results"} children={shows} isTV={true} />
            }
        </ScrollContainer>
    )
}

export default SearchPresenter;