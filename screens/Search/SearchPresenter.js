import React from "react";
import styled from "styled-components/native";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
    background-color: #333;
    width: 100%;
`;

const Text = styled.Text``;

const SearchPresenter = ({keyword, onChange, onSubmit, movies, shows}) => {
    return(
        <Container>
            <Input
                placeholder={"Write a keyword"}
                value={keyword}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            {
                movies.length !== 0
                &&<HorizontalSlider title={"Movie results"}>
                    {movies.map(movie => (
                        <Vertical
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            poster={movie.poster_path}
                            votes={movie.vote_average}
                        />
                    ))}
                </HorizontalSlider>
            }
            {
                shows.length !== 0
                &&<HorizontalSlider title={"TV results"}>
                    {shows.map(show => (
                        <Vertical
                            key={show.id}
                            id={show.id}
                            title={show.name}
                            poster={show.poster_path}
                            votes={show.vote_average}
                        />
                    ))}
                </HorizontalSlider>
            }
        </Container>
    )
}

export default SearchPresenter;