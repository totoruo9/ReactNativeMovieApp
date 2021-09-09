import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slider from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import { symbol } from "prop-types";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List"
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View`

`;

export default ({loading, nowPlaying, popular, upcoming}) => {
    return (
        <>
            <ScrollContainer loading={loading}>
                <SliderContainer>
                    {nowPlaying.map(movie => 
                        <Slider
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                            poster={movie.poster_path}
                        />)
                    }
                </SliderContainer>
                <Container>
                    <HorizontalSlider title={"Popular Movies"}>
                        {popular.map(movie => (
                            <Vertical
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.original_title}
                                votes={movie.vote_average}
                            />))
                        }
                    </HorizontalSlider>
                    
                    <List title={"Coming Soon"}>
                        {upcoming.map(movie => (
                            <Horizontal
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                poster={movie.poster_path}
                                overview={movie.overview}
                                releaseDate={movie.release_date}
                            />
                        ))}
                    </List>
                </Container>
            </ScrollContainer>
        </>
    )
}