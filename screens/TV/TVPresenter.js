import React from "react";
import {View, Text} from "react-native";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import SliderContainer from "../../components/SliderContainer";
import Slider from "../../components/Movies/Slide";

const Container = styled.View`
    margin-top: 30px;
`;

const TVPresenter = ({loading, today, popular, topRated, thisWeek}) => (
    
    <ScrollContainer loading={loading}>
        <Container>
            <HorizontalSlider title={"Popular Shows"}>
                {popular.map(show =>
                    <Vertical
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.original_name}
                        votes={show.vote_average}
                    />
                )}
            </HorizontalSlider>

            <SliderContainer>
                {thisWeek.map(show =>
                    <Slider
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        overview={show.overview}
                        votes={show.vote_average}
                        backgroundImage={show.backdrop_path}
                        poster={show.poster_path}
                    />)
                }
            </SliderContainer>

            <HorizontalSlider title={"Top Rated"}>
                {topRated.map(show =>
                    <Vertical
                        key={show.id}
                        id={show.id}
                        poster={show.poster_path}
                        title={show.original_name}
                        votes={show.vote_average}
                    />
                )}
            </HorizontalSlider>

            <List title={"Airing Today"}>
                {today.map(show =>
                    <Horizontal
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        poster={show.poster_path}
                        overview={show.overview}
                    />)}
            </List>
        </Container>
    </ScrollContainer>
)


export default TVPresenter;